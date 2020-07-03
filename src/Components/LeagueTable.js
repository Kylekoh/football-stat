import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from './Loader';
import Message from './Message';
import LeagueName from './LeagueName';

import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
	tableContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '30px',
		overflow: 'hidden',
		marginBottom: '100px'
	},
	table: {
		maxWidth: 1200,
		fontSize: '20px'
	},
	tableHeadRow: {
		backgroundColor: '#F7F7F7',
		borderTop: '1px solid #494949'
	},
	tableHead: {
		fontWeight: '800',
		fontSize: '16px'
	},
	rank: {
		fontWeight: 800,
		fontSize: '16px'
	},
	logoContainer: {
		paddingRight: '0px'
	},
	logo: {
		verticalAlign: 'middle',
		width: '35px',
		height: '35px'
	},
	points: {
		backgroundColor: 'rgba(64,134,255,.06)',
		fontWeight: 600
	}
});

const CustomTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: 'black',
		color: 'red'
	},
	body: {
		fontSize: '17px'
	}
}))(TableCell);

const LeagueTable = ({ leagueId, standings, error, loading }) => {
	const classes = useStyles();
	return loading ? (
		<>
			<Helmet>
				<title>Loading | LeagueName</title>
			</Helmet>
			<Loader />
		</>
	) : error ? (
		<>
			<Message text={error} />
		</>
	) : (
		<>
			<LeagueName />
			<TableContainer className={classes.tableContainer}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow className={classes.tableHeadRow}>
							<TableCell className={classes.tableHead} align="center">
								순위
							</TableCell>
							<TableCell className={classes.tableHead}></TableCell>
							<TableCell className={classes.tableHead}>팀</TableCell>
							<TableCell className={classes.tableHead} align="center">
								경기
							</TableCell>
							<TableCell className={classes.tableHead} align="center">
								승
							</TableCell>
							<TableCell className={classes.tableHead} align="center">
								무
							</TableCell>
							<TableCell className={classes.tableHead} align="center">
								패
							</TableCell>
							<TableCell className={classes.tableHead} align="center">
								득점
							</TableCell>
							<TableCell className={classes.tableHead} align="center">
								실점
							</TableCell>
							<TableCell className={classes.tableHead} align="center">
								득실차
							</TableCell>
							<TableCell
								className={classes.tableHead}
								align="center"
								style={{ color: '#1760f0' }}
							>
								승점
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{standings &&
							standings.length > 0 &&
							standings.map((standing) => (
								<TableRow
									className={classes.tableCellRow}
									key={standing.team_id}
									style={{ fontSize: '20px' }}
								>
									<CustomTableCell
										component="th"
										scope="row"
										align="center"
										className={classes.rank}
									>
										{standing.rank}
									</CustomTableCell>

									<CustomTableCell
										width="10px"
										className={classes.logoContainer}
										align="center"
									>
										<img
											src={standing.logo}
											className={classes.logo}
											alt="team-logo"
										/>
									</CustomTableCell>
									<CustomTableCell className={classes.teamContainer}>
										<Link
											to={{
												pathname: `/team/${standing.team_id}`,
												state: { leagueId: `${leagueId}` }
											}}
										>
											{standing.teamName} >
										</Link>
									</CustomTableCell>

									<CustomTableCell align="center">
										{standing.all.matchsPlayed}
									</CustomTableCell>
									<CustomTableCell align="center">
										{standing.all.win}
									</CustomTableCell>
									<CustomTableCell align="center">
										{standing.all.draw}
									</CustomTableCell>
									<CustomTableCell align="center">
										{standing.all.lose}
									</CustomTableCell>
									<CustomTableCell align="center">
										{standing.all.goalsFor}
									</CustomTableCell>
									<CustomTableCell align="center">
										{standing.all.goalsAgainst}
									</CustomTableCell>
									<CustomTableCell align="center">
										{standing.goalsDiff}
									</CustomTableCell>
									<CustomTableCell align="center" className={classes.points}>
										{standing.points}
									</CustomTableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

LeagueTable.propTypes = {
	leagueId: PropTypes.number,
	standing: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default LeagueTable;
