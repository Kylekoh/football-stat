import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	width: 100%;
	border-bottom: 1px solid #e2e2e2;
	position: sticky;
	z-index: 2;
	background-color: #263443;
`;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
	}
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 65px;
	}
	span {
		@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
		font-family: 'Do Hyeon', sans-serif;
		font-size: 1rem;
		font-weight: bold;
		color: white;
	}
`;

interface MenuPropsType {
	menuToggle: boolean;
}

const List = styled.ul<MenuPropsType>`
	display: flex;

	@media (max-width: 768px) {
		width: 100%;
		align-self: center;
		flex-direction: column;
		display: ${(props) => (props.menuToggle ? 'block' : 'none')};
	}
`;

const Item = styled.li`
	@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
	font-family: 'Do Hyeon', sans-serif;
	text-align: center;
	font-size: 1.1rem;
	padding: 10px 22px;
	font-weight: 300;
	color: white;

	&:hover {
		color: #263443;
		background-color: sandybrown;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		-webkit-transition: all 0.2s ease-in-out;
		border-radius: 4px;
	}

	@media (max-width: 768px) {
		padding-left: 0;
		padding-right: 0;
		width: 100%;
		margin: 0;
	}
`;

const Menu = styled.a`
	display: none;
	color: white;
	font-size: 20px;
	position: absolute;
	right: 32px;
	top: 32px;
	cursor: pointer;
	color: white;

	@media (max-width: 768px) {
		display: block;
	}
`;

const HeaderComponent = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	const handleToggle = () => {
		setMenuToggle(!menuToggle);
	};

	return (
		<>
			<Header>
				<Container>
					<Logo>
						<img src={require('../Images/logo1.png')} alt="logo"></img>
						<span>FOOTBALL_STAT</span>
					</Logo>
					<List menuToggle={menuToggle}>
						<Item>
							<Link to="/league/524">스포츠홈</Link>
						</Item>
						<Item>
							<Link to="/league/524">해외축구</Link>
						</Item>
					</List>
					<Menu onClick={handleToggle}>
						<FaBars />
					</Menu>
				</Container>
			</Header>
		</>
	);
};

export default withRouter(HeaderComponent);
