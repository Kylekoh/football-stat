import React, { Component } from 'react';
import LeaguePresenter from './LeaguePresenter';
import { footballApi } from 'api';

export default class extends Component {
	state = {};

	render() {
		return <LeaguePresenter />;
	}
}
