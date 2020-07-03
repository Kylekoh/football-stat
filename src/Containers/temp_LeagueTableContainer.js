import React, { Component } from 'react';
import LeagueTable from '../Components/LeagueTable';
import { useDispatch } from 'react-redux';
import { footballApi } from '../api';

class LeagueTableContainer extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		leagueId: null,
		standings: null,
		error: null,
		loading: true
	};

	componentDidMount() {
		this.getData(this.props.match.params.id);
		this.setState({
			leagueId: this.props.match.params.id
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.getData(nextProps.match.params.id);
		}
		this.setState({
			leagueId: nextProps.match.params.id
		});
	}

	getData = async (id) => {
		const parseId = parseInt(id);

		try {
			const {
				data: {
					api: { standings }
				}
			} = await footballApi.leagueTable(parseId);
			console.log(this.state.standings);
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
		const { leagueId, standings, error, loading } = this.state;
		return (
			<LeagueTable
				leagueId={leagueId}
				standings={standings}
				error={error}
				loading={loading}
			/>
		);
	}
}
