import React, { useEffect } from 'react';
import TeamInfo from '../Components/TeamInfo';
import { useSelector, useDispatch } from 'react-redux';
import { getTeamInfo } from '../modules/Team';
import Loader from '../Components/Loader';

interface Props {
	id: number;
}

const TeamInfoContainer: React.FunctionComponent<Props> = (props) => {
	const team_id = props.id;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTeamInfo(team_id));
	}, [team_id, dispatch]);

	const { loading, data, error } = useSelector((state) => state.Team.infos, []);

	if (loading) return <Loader />;
	if (!data) return null;

	return <TeamInfo data={data} error={error} loading={loading} />;
};

export default TeamInfoContainer;
