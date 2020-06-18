import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { footballApi } from 'api';

export default class extends Component {
	state = {
		standings: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		try {
			const {
				data: {
					api: { standings }
				}
			} = await footballApi.leagueTable();
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
		console.log(standings);
		return (
			<HomePresenter standings={standings} error={error} loading={loading} />
		);
	}
}
