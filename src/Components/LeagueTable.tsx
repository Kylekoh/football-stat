import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LeagueName from './LeagueName';
import { Standing } from '../api';

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
		margin: '30px auto 100px auto',
		overflowX: 'auto',
		overflowY: 'hidden',
		width: '80%',
		maxWidth: '1200px',
	},
	table: {
		minWidth: '900px',
	},
	tableHeadRow: {
		backgroundColor: '#F7F7F7',
		borderTop: '1px solid #494949',
	},
	tableHead: {
		fontWeight: 800,
		fontSize: '14px',
		minWidth: '45px',
		'@media (max-width:900px)': {
			fontSize: '12px',
			padding: '12px 12px',
		},
	},
	rank: {
		fontWeight: 800,
		fontSize: '14px',
	},
	logoContainer: {
		paddingRight: '0px',
	},
	logo: {
		verticalAlign: 'middle',
		width: '30px',
		height: '30px',
		'@media (max-width:900px)': {
			width: '24px',
			height: '24px',
		},
	},
	points: {
		backgroundColor: 'rgba(64,134,255,.06)',
		fontWeight: 600,
	},
});

const CustomTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: 'black',
		color: 'red',
	},
	body: {
		fontSize: '14px',
		'@media (max-width:900px)': {
			fontSize: '12px',
		},
	},
	root: {
		padding: '12px',
		'@media (max-width:900px)': {
			padding: '8px',
		},
	},
}))(TableCell);

export interface Props {
	standings: Array<Standing[]>;
}

const LeagueTable = ({ standings }: Props) => {
	const classes = useStyles();
	return (
		<>
			<Helmet>
				<title>리그순위</title>
			</Helmet>
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
							standings[0].length > 0 &&
							standings[0].map((standing) => (
								<TableRow key={standing.team_id} style={{ fontSize: '20px' }}>
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
									<CustomTableCell>
										<Link to={`/team/${standing.team_id}`}>
											{standing.teamName} {'>'}
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

export default LeagueTable;
