import React from 'react';
import LeagueTableContainer from '../Containers/LeagueTableContainer';

const LeaguePage = (props) => {
	console.log(props);
	const {
		match: {
			params: { id }
		}
	} = props;

	return (
		<div>
			<LeagueTableContainer id={id} />
		</div>
	);
};

export default LeaguePage;
