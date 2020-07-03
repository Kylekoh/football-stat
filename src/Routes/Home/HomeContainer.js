import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { footballApi } from 'api';

export default class extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		standings: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		try {
			// const {
			// 	data: {
			// 		api: { standings }
			// 	}
			// } = await footballApi.leagueTable();
			// this.setState({
			// 	standings: standings[0]
			// });
			this.setState({
				error: '테스트용 에러입니다'
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
			<HomePresenter standings={standings} error={error} loading={loading} />
		);
	}
}
