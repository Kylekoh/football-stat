import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const TeamPresenter = ({ teams, error, loading }) =>
	loading ? (
		<>
			<Loader />
		</>
	) : error ? (
		<>
			<Message text={error} />
		</>
	) : (
		<div>{teams.name}</div>
	);

TeamPresenter.propTypes = {
	teams: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default TeamPresenter;
