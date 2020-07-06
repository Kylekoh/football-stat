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
	margin-top: 50px;
	border: 0.3px solid gray;
`;

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	align-items: center;
	justify-content: flex-start;
`;
const ImageContainer = styled.div`
	width: 200px;
	height: 200px;
	border: 1px solid gray;
	border-radius: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	height: 10rem;
	width: 10rem;
	background-size: cover;
	border-radius: 180px;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 50px;
`;

const TeamName = styled.h2`
	margin-left: 12px;
	font-size: 3rem;
	font-weight: 900;
	margin: 0;
`;

const StatContainer = styled.ul`
	display: grid;
	margin-top: 30px;
	grid-gap: 12px;
	grid-template-columns: repeat(2, 1fr);
`;

const Stat = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 8px 20px 8px 0px;

	h3 {
		color: gray;
		font-size: 1.2rem;
	}
	p {
		font-size: 1rem;
	}
`;

const TeamInfo = ({ data, error, loading }) => {
	const {
		data: {
			api: { teams },
		},
	} = data;

	return loading ? (
		<>
			<Helmet>
				<title>Loading | Football Stat</title>
			</Helmet>
			<Loader />
		</>
	) : error ? (
		<>
			<Message text={error} />
		</>
	) : (
		<>
			<Container>
				<Helmet>
					<title> 팀정보 | {teams[0].name}</title>
				</Helmet>
				<MainContainer>
					<ImageContainer>
						<Image src={teams[0].logo} alt="logo" />
					</ImageContainer>
					<InfoContainer>
						<TeamName>{teams[0].name}</TeamName>
						<StatContainer>
							<Stat>
								<h3>나라</h3>&nbsp;&nbsp;&nbsp;&nbsp;
								<p>{teams[0].country}</p>
							</Stat>
							<Stat>
								<h3>설립연도</h3>&nbsp;&nbsp;&nbsp;&nbsp;
								<p>{teams[0].founded}년</p>
							</Stat>
							<Stat>
								<h3>구장</h3>&nbsp;&nbsp;&nbsp;&nbsp;
								<p>{teams[0].venue_name}</p>
							</Stat>
							<Stat>
								<h3>수용인원</h3>&nbsp;&nbsp;&nbsp;&nbsp;
								<p>{teams[0].venue_capacity.toLocaleString()}명</p>
							</Stat>
						</StatContainer>
					</InfoContainer>
				</MainContainer>
			</Container>
		</>
	);
};

TeamInfo.propTypes = {
	teams: PropTypes.object,
	statistics: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default TeamInfo;
