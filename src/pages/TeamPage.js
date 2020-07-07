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
			<TeamInfoContainer id={id} />
		</div>
	);
};

export default Teampage;
