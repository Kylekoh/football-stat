import React from 'react';
import TeamInfoContainer from '../Containers/TeamInfoContainer';

const Teampage = (props) => {
	const {
		match: {
			params: { id }
		}
	} = props;

	const {
		location: {
			state: { leagueId }
		}
	} = props;
	return (
		<div>
			<TeamInfoContainer id={id} leagueId={leagueId} />
		</div>
	);
};

export default Teampage;
