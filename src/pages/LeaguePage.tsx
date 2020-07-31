import React from 'react';
import LeagueTableContainer from '../Containers/LeagueTableContainer';
import { withRouter, RouteComponentProps } from 'react-router';

interface MatchParams {
	id: string;
}

const LeaguePage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
	const {
		match: {
			params: { id = '524' },
		},
	} = props;

	return (
		<div>
			<LeagueTableContainer id={parseInt(id, 10)} />
		</div>
	);
};

export default withRouter(LeaguePage);
