import React from 'react';
import LeagueTableContainer from '../Containers/LeagueTableContainer';

const LeaguePage = (props) => {
	const {
		match: {
			params: { id = 524 },
		},
	} = props;

	return (
		<div>
			<LeagueTableContainer id={parseInt(id, 10)} />
		</div>
	);
};

export default LeaguePage;
