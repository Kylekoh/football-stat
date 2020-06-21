import React, { Component } from 'react';
import TeamPresenter from './TeamPresenter';
import { footballApi } from 'api';

export default class extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		teams: null,
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
					api: { teams }
				}
			} = await footballApi.teamInfo();
			this.setState({ teams: teams[0] });
		} catch {
			this.setState({ error: "Can't find anything" });
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		return <TeamPresenter />;
	}
}
