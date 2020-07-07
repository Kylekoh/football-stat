import React, { useEffect } from 'react';
import TeamInfo from '../Components/TeamInfo';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getTeamInfo } from '../modules/Team';
import Loader from '../Components/Loader';

const TeamInfoContainer = (props) => {
	const team_id = parseInt(props.id);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTeamInfo(team_id));
	}, [dispatch, team_id]);

	const { loading, data, error } = useSelector(
		(state) => state.Team.infos,
		shallowEqual
	);

	if (loading) return <Loader />;
	if (!data) return null;

	return <TeamInfo data={data} error={error} loading={loading} />;
};

export default TeamInfoContainer;
