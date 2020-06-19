import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import LeagueName from '../../Components/LeagueName';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	tableContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '30px'
	},
	table: {
		maxWidth: 1200
	},
	logoContainer: {},
	logo: {
		verticalAlign: 'middle',
		width: '30px',
		height: '30px'
	}
});

const HomePresenter = ({ standings, error, loading }) => {
	const classes = useStyles();
	return (
		<>
			<LeagueName />
			<TableContainer className={classes.tableContainer}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableCell align="center">순위</TableCell>
						<TableCell></TableCell>
						<TableCell>팀</TableCell>
						<TableCell>경기</TableCell>
						<TableCell>승</TableCell>
						<TableCell>무</TableCell>
						<TableCell>패</TableCell>
						<TableCell>득점</TableCell>
						<TableCell>실점</TableCell>
						<TableCell>득실차</TableCell>
						<TableCell>승점</TableCell>
					</TableHead>
					<TableBody>
						{standings &&
							standings.length > 0 &&
							standings.map((standing) => (
								<TableRow key={standing.team_id}>
									<TableCell component="th" scope="row" align="center">
										{standing.rank}
									</TableCell>
									<TableCell width="10px" className={classes.logoContainer}>
										<img
											src={standing.logo}
											className={classes.logo}
											alt="team-logo"
										/>
									</TableCell>
									<TableCell className={classes.teamContainer}>
										{standing.teamName}
									</TableCell>
									<TableCell>{standing.all.matchsPlayed}</TableCell>
									<TableCell>{standing.all.win}</TableCell>
									<TableCell>{standing.all.draw}</TableCell>
									<TableCell>{standing.all.lose}</TableCell>
									<TableCell>{standing.all.goalsFor}</TableCell>
									<TableCell>{standing.all.goalsAgainst}</TableCell>
									<TableCell>{standing.goalsDiff}</TableCell>
									<TableCell>{standing.points}</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

HomePresenter.propTypes = {
	standing: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default HomePresenter;
