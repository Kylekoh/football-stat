import React, { Component } from 'react';
import LeaguePresenter from './LeaguePresenter';
import { footballApi } from 'api';

export default class extends Component {
	constructor(props) {
		super(props);
		// console.log(props);
	}

	state = {
		standings: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		const {
			match: {
				params: { id }
			}
		} = this.props;
		const parseId = parseInt(id);

		try {
			const {
				data: {
					api: { standings }
				}
			} = await footballApi.leagueTable(parseId);
			console.log(standings);
			this.setState({
				standings: standings[0]
			});
		} catch {
			this.setState({
				error: '데이터를 찾을 수 없습니다'
			});
		} finally {
			this.setState({
				loading: false
			});
		}
	}

	render() {
		const { standings, error, loading } = this.state;
		return (
			<LeaguePresenter standings={standings} error={error} loading={loading} />
		);
	}
}
