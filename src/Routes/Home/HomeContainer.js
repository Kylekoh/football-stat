import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { footballApi } from 'api';

export default class extends Component {
	state = {
		error: null,
		loading: true
	};

	async componentDidMount() {
		try {
		} catch {
		} finally {
		}
	}

	render() {
		return <HomePresenter />;
	}
}
