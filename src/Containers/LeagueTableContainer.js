import React, { useEffect } from 'react';
import LeagueTable from '../Components/LeagueTable';
import { useSelector, useDispatch } from 'react-redux';
import { getLeagueTables } from '../modules/League';
import Loader from '../Components/Loader';

const LeagueTableContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLeagueTables(props.id));
	}, [dispatch, props.id]);

	const { loading, data, error } = useSelector(
		(state) => state.League.tables,
		[]
	);

	if (loading) return <Loader />;
	if (!data) return null;

	return <LeagueTable loading={loading} error={error} data={data} />;
};

export default LeagueTableContainer;
