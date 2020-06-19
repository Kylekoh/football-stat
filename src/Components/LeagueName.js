import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	margin-bottom: 30px;
`;

const List = styled.ul`
	width: 100%;
	min-height: 60px;
	max-width: 1100px;
	display: grid;
	background-color: salmon;
	flex-direction: row;
	grid-template-columns: repeat(5, 1fr);
	border-top: 2px solid #3f4550;
`;

const Item = styled.li`
	padding: 25px 30px;
	text-align: center;
	vertical-align: middle;
`;

const LeagueName = (props) => (
	<>
		<Container>
			<List>
				<Item>
					<Link to="/league/:id">프리미어리그</Link>
				</Item>
				<Item>
					<Link to="/league/:id">라리가</Link>
				</Item>
				<Item>
					<Link to="/league/:id">분데스리가</Link>
				</Item>
				<Item>
					<Link to="/league/:id">세리에A</Link>
				</Item>
				<Item>
					<Link to="/league/:id">리그1</Link>
				</Item>
			</List>
		</Container>
	</>
);

export default withRouter(LeagueName);
