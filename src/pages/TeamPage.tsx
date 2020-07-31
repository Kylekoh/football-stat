import React from 'react';
import TeamInfoContainer from '../Containers/TeamInfoContainer';
import { withRouter, RouteComponentProps } from 'react-router';

interface MatchParams {
	id: string;
}

const Teampage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
	const {
		match: {
			params: { id },
		},
	} = props;

	return (
		<div>
			<TeamInfoContainer id={parseInt(id, 10)} />
		</div>
	);
};

export default withRouter(Teampage);
