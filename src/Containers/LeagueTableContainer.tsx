import React, { useEffect } from 'react';
import LeagueTable from '../Components/LeagueTable';
import { useSelector, useDispatch } from 'react-redux';
import { getLeagueTables } from '../modules/League_past';
import Loader from '../Components/Loader';

interface Props {
	id: number;
}

const LeagueTableContainer: React.FunctionComponent<Props> = (props) => {
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
