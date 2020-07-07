import React from 'react';
import TeamInfoContainer from '../Containers/TeamInfoContainer';

const Teampage = (props) => {
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

export default Teampage;
