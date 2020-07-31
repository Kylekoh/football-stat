import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Loader from './Loader';
import Message from './Message';

const Container = styled.div`
	font-size: 12px;
	display: flex;
	flex-direction: row;
	width: 70%;
	max-width: 900px;
	margin: 0 auto;
	height: 400px;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	border: 0.3px solid gray;
	background: #414247
		url('http://t1.daumcdn.net/media/sports/teamplayer/bg_teamplayer.png')
		no-repeat 0 0;
	@media (max-width: 1000px) {
		width: 90%;
	}
`;

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	align-items: center;
	justify-content: flex-start;
	@media (max-width: 1000px) {
		flex-direction: column;
		width: 90%;
	}
`;
const ImageContainer = styled.div`
	width: 200px;
	height: 200px;
	border: 1px solid gray;
	border-radius: 150px;
	display: flex;
	background-color: white;
	justify-content: center;
	align-items: center;
	@media (max-width: 1000px) {
		width: 120px;
		height: 120px;
		margin-bottom: 30px;
	}
`;

const Image = styled.img`
	height: 9rem;
	width: 9rem;
	background-size: cover;
	@media (max-width: 1000px) {
		height: 5rem;
		width: 5rem;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 50px;
	@media (max-width: 1000px) {
		margin-left: 0;
	}
`;

const TeamName = styled.h2`
	margin-left: 12px;
	font-size: 3rem;
	font-weight: 900;
	margin: 0 auto;
	color: #c5c5c5;
	@media (max-width: 1000px) {
		font-size: 1.8rem;
	}
`;

const StatContainer = styled.ul`
	display: grid;
	margin-top: 30px;
	grid-gap: 12px;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 1000px) {
		margin-top: 20px;
	}
`;

const Stat = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 8px 20px 8px 0px;

	span {
		font-size: 1.1rem;
		white-space: nowrap;
		font-weight: 600;
	}
	p {
		font-size: 0.9rem;
		color: white;
		font-weight: 600;
	}
	@media (max-width: 1000px) {
		span {
			font-size: 0.9rem;
		}
		p {
			font-size: 0.8rem;
		}
	}
`;

interface Props {
	data: object | string;
	error: string;
	loading: boolean;
}

const TeamInfo: React.FunctionComponent<Props> = ({ data, error, loading }) => {
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
								<span>나라</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<p>{teams[0].country}</p>
							</Stat>
							<Stat>
								<span>설립연도</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<p>{teams[0].founded}년</p>
							</Stat>
							<Stat>
								<span>구장</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<p>{teams[0].venue_name}</p>
							</Stat>
							<Stat>
								<span>수용인원</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<p>{teams[0].venue_capacity.toLocaleString()}명</p>
							</Stat>
						</StatContainer>
					</InfoContainer>
				</MainContainer>
			</Container>
		</>
	);
};

export default TeamInfo;
