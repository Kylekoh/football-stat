import React, { useEffect, useState } from 'react';
import LeagueTable from '../Components/LeagueTable';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getLeagueTables } from '../modules/League';

const LeagueTableContainer = (props) => {
	const [leagueId, setLeagueId] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLeagueTables(props.id));
		setLeagueId(props.id);
	}, [dispatch, props.id]);

	const { loading, data, error } = useSelector(
		(state) => state.League.tables,
		shallowEqual
	);

	if (!data) return null;

	return (
		<LeagueTable
			loading={loading}
			error={error}
			data={data}
			leagueId={leagueId}
		/>
	);
};

export default LeagueTableContainer;
