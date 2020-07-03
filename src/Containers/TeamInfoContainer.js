import React, { Component } from 'react';
import TeamInfo from '../Components/TeamInfo';
import { footballApi } from '../api';

export default class extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		teams: null,
		statistics: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		const {
			match: {
				params: { id }
			}
		} = this.props;

		const {
			location: {
				state: { leagueId }
			}
		} = this.props;

		const league_id = parseInt(leagueId);
		const team_id = parseInt(id);

		try {
			const {
				data: {
					api: { teams }
				}
			} = await footballApi.teamInfo(team_id);
			this.setState({ teams: teams[0] });

			const {
				data: {
					api: { statistics }
				}
			} = await footballApi.teamRecord(league_id, team_id);
			this.setState({ statistics });
		} catch {
			this.setState({ error: "Can't find anything" });
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { teams, statistics, error, loading } = this.state;
		return (
			<TeamInfo
				statistics={statistics}
				teams={teams}
				error={error}
				loading={loading}
			/>
		);
	}
}
