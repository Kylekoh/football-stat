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
				<ImageContainer>
					<Image src={teams[0].logo} alt="logo" />
					<div>
						<div>{teams[0].name}</div>
						<div>
							<h3>나라</h3>
							<span>{teams[0].country}</span>
						</div>
						<div>
							<h3>구장</h3>
							<span>{teams[0].venue_name}</span>
						</div>
					</div>
				</ImageContainer>
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
