import React, { Component } from 'react';
import TeamPresenter from './TeamPresenter';
import { footballApi } from 'api';

export default class extends Component {
	state = {};

	render() {
		return <TeamPresenter />;
	}
}
