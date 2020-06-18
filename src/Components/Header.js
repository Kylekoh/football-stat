import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0px 10px;
	background-color: rgba(20, 20, 20, 0.8);
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
	display: flex;
`;

const Item = styled.li`
	width: 50px;
	text-align: center;
`;

const HeaderComponent = (props) => (
	// console.log(props)
	<>
		<Header>
			<List>
				<Item>
					<Link to="/team">Team</Link>
				</Item>
				<Item>
					<Link to="/team">League</Link>
				</Item>
			</List>
		</Header>
	</>
);

export default withRouter(HeaderComponent);
