import React, { useEffect } from 'react';
import TeamInfo from '../Components/TeamInfo';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { getTeamInfo } from '../modules/Team';
import Loader from '../Components/Loader';
import Message from '../Components/Message';

interface Props {
	id: number;
}

const TeamInfoContainer: React.FunctionComponent<Props> = (props) => {
	const team_id = props.id;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTeamInfo(team_id));
	}, [team_id, dispatch]);

	const { loading, data, error } = useSelector(
		(state: RootState) => state.Team.infos
	);
	console.log(data);

	// if (!data) return null;

	return (
		<>
			{loading && (
				<>
					<Helmet>
						<title>Loading | Football Stat</title>
					</Helmet>
					<Loader />
				</>
			)}
			{error && <Message text={error} />}
			{data && <TeamInfo data={data} />}
		</>
	);
};

export default TeamInfoContainer;
