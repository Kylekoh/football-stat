import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const TeamPresenter = ({ teams, statistics, error, loading }) =>
	loading ? (
		<>
			<Loader />
		</>
	) : error ? (
		<>
			<Message text={error} />
		</>
	) : (
		<>
			<div>{teams.name}</div>
			<img src={teams.logo} alt="logo" />
			<div>{teams.country}</div>
			<div>{teams.venue_name}</div>
			<div>{statistics.goals.goalsAgainst.home}</div>
			<div>{statistics.goals.goalsAgainst.away}</div>
			<div>{statistics.goals.goalsAgainst.total}</div>
		</>
	);

TeamPresenter.propTypes = {
	teams: PropTypes.object,
	statistics: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default TeamPresenter;
