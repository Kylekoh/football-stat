import React, { Component } from 'react';
import LeaguePresenter from './LeaguePresenter';
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

	componentDidMount() {
		this.getData(this.props.match.params.id);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.getData(nextProps.match.params.id);
		}
	}

	getData = async (id) => {
		const parseId = parseInt(id);

		try {
			const {
				data: {
					api: { standings }
				}
			} = await footballApi.leagueTable(parseId);
			this.setState({
				loading: true,
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
	};

	render() {
		const { standings, error, loading } = this.state;
		return (
			<LeaguePresenter standings={standings} error={error} loading={loading} />
		);
	}
}
