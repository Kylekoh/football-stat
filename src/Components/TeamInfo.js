import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from './Loader';
import Message from './Message';

const Container = styled.div`
	font-size: 12px;
	display: flex;
	flex-direction: row;
	width: 70%;
	margin: 0 auto;
	height: 400px;
	justify-content: center;
	align-items: center;
	background-color: salmon;
	margin-top: 50px;
`;

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Image = styled.img`
	height: 120px;
	width: 120px;
	background-size: cover;
	border-radius: 180px;
`;

const StatContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

const TeamInfo = ({ data, error, loading }) => {
	const {
		data: {
			api: { teams }
		}
	} = data;
	console.log(teams);

	return loading ? (
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
				<MainContainer>
					<Image src={teams[0].logo} alt="logo" />
					<StatContainer>
						<li>
							<h3>팀명 : </h3>
							<span>{teams[0].name}</span>
						</li>
						<li>
							<h3>나라 : </h3>
							<p>{teams[0].country}</p>
						</li>
						<li>
							<h3>설립연도 : </h3>
							<p>{teams[0].founded}</p>
						</li>
						<li>
							<h3>홈구장 : </h3>
							<p>{teams[0].venue_name}</p>
						</li>
						<li>
							<h3>구장 도시 : </h3>
							<p>{teams[0].venue_city}</p>
						</li>
						<li>
							<h3>구장 수용인원 : </h3>
							<p>{teams[0].venue_capacity}</p>
						</li>
					</StatContainer>
				</MainContainer>
			</Container>
		</>
	);
};

TeamInfo.propTypes = {
	teams: PropTypes.object,
	statistics: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default TeamInfo;
