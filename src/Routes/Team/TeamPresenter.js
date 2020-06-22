import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
	font-size: 12px;
	display: flex;
	flex-direction: row;
	min-width: 1000px;
	margin: 0 auto;
	height: 500px;
	justify-content: center;
	align-items: center;
	background-color: salmon;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Image = styled.img`
	height: 120px;
	width: 120px;
	background-size: cover;
	border-radius: 180px;
`;

const StatContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

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
			<Container>
				<ImageContainer>
					<Image src={teams.logo} alt="logo" />
					<div>
						<div>{teams.name}</div>
						<div>
							<h3>나라</h3>
							<span>{teams.country}</span>
						</div>
						<div>
							<h3>구장</h3>
							<span>{teams.venue_name}</span>
						</div>
					</div>
				</ImageContainer>
				<div>
					<span>19/20시즌</span>
					<StatContainer>
						<div>{statistics.goals.goalsAgainst.home}</div>
						<div>{statistics.goals.goalsAgainst.away}</div>
						<div>{statistics.goals.goalsAgainst.total}</div>
						<div>{statistics.goals.goalsAgainst.away}</div>
						<div>{statistics.goals.goalsAgainst.total}</div>
						<div>{statistics.goals.goalsAgainst.away}</div>
						<div>{statistics.goals.goalsAgainst.total}</div>
						<div>{statistics.goals.goalsAgainst.away}</div>
					</StatContainer>
				</div>
			</Container>
		</>
	);

TeamPresenter.propTypes = {
	teams: PropTypes.object,
	statistics: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default TeamPresenter;
