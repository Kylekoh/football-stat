import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	width: 100%;
	height: 100px;
	padding: 0px 10px;
	border-bottom: 1px solid #e2e2e2;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 80px;
	}
	span {
		@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
		font-size: 1.2rem;
		font-weight: bold;
		font-family: 'Do Hyeon', sans-serif;
	}
`;

const List = styled.ul`
	display: flex;
`;

const Item = styled.li`
	@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
	font-family: 'Do Hyeon', sans-serif;
	text-align: center;
	font-size: 1.1rem;
	padding: 10px 22px;
	font-weight: 300;
`;

const HeaderComponent = (props) => (
	<>
		<Header>
			<Container>
				<Logo>
					<img src={require('../Images/logo1.png')} alt="logo"></img>
					<span>FOOTBALL_STAT</span>
				</Logo>
				<List>
					<Item>
						<Link to="/">Home</Link>
					</Item>
					<Item>
						<Link to="/league/524">리그순위</Link>
					</Item>
					<Item>
						<Link to="/team/20">팀정보</Link>
					</Item>
				</List>
			</Container>
		</Header>
	</>
);

export default withRouter(HeaderComponent);
