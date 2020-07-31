import React, { useEffect } from 'react';
import LeagueTable from '../Components/LeagueTable';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { getLeagueTables } from '../modules/League';
import { RootState } from '../modules';

interface Props {
	id: number;
}

const LeagueTableContainer: React.FunctionComponent<Props> = (props) => {
	console.log(props);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLeagueTables(props.id));
	}, [dispatch, props.id]);

	const { loading, data, error } = useSelector(
		(state: RootState) => state.League.tables
	);

	console.log(data);
	if (loading) return <Loader />;
	if (!data) return null;
	return (
		<>
			{loading && (
				<>
					<Helmet>
						<title>Loading | 리그순위 </title>
					</Helmet>
					<Loader />
				</>
			)}
			{error && <Message text={error} />}
			{data && <LeagueTable standings={data.data.api.standings} />}
		</>
	);
};

export default LeagueTableContainer;
