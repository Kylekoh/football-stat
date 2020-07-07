import React, { useEffect } from 'react';
import TeamInfo from '../Components/TeamInfo';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getTeamInfo } from '../modules/Team';

const TeamInfoContainer = (props) => {
	const team_id = parseInt(props.id);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTeamInfo(team_id));
	}, [dispatch, team_id]);

	// const { loading, data, error } = useSelector((state) => console.log(state));
	const { loading, data, error } = useSelector(
		(state) => state.Team.infos,
		shallowEqual
	);

	if (!data) return null;

	return (
		<TeamInfo
			// statistics={statistics}
			data={data}
			error={error}
			loading={loading}
		/>
	);
};

export default TeamInfoContainer;

// export default class extends Component {
// 	state = {
// 		teams: null,
// 		statistics: null,
// 		error: null,
// 		loading: true
// 	};

// 	async componentDidMount() {
// 		// const league_id = parseInt(leagueId);
// 		// const team_id = parseInt(id);
// 		// try {
// 		// 	const {
// 		// 		data: {
// 		// 			api: { teams }
// 		// 		}
// 		// 	} = await footballApi.teamInfo(team_id);
// 		// 	this.setState({ teams: teams[0] });
// 		// 	const {
// 		// 		data: {
// 		// 			api: { statistics }
// 		// 		}
// 		// 	} = await footballApi.teamRecord(league_id, team_id);
// 		// 	this.setState({ statistics });
// 		// } catch {
// 		// 	this.setState({ error: "Can't find anything" });
// 		// } finally {
// 		// 	this.setState({ loading: false });
// 		// }
// 	}

// 	render() {
// 		const { teams, statistics, error, loading } = this.state;
// 		return (
// 			<TeamInfo
// 				statistics={statistics}
// 				teams={teams}
// 				error={error}
// 				loading={loading}
// 			/>
// 		);
// 	}
// }
