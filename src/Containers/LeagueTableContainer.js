import React, { useEffect } from 'react';
import LeagueTable from '../Components/LeagueTable';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getLeagueTables } from '../modules/League';

const LeagueTableContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLeagueTables(props.id));
	}, [dispatch, props.id]);

	const { loading, data, error } = useSelector(
		(state) => state.League.tables,
		shallowEqual
	);

	if (!data) return null;

	return <LeagueTable loading={loading} error={error} data={data} />;
};

export default LeagueTableContainer;
