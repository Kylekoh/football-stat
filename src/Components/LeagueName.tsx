import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 75%;
	margin: 30px auto;
`;

const List = styled.ul`
	width: 100%;
	min-height: 50px;
	max-width: 1150px;
	display: grid;
	flex-direction: row;
	grid-template-columns: repeat(5, 1fr);
	padding: 0;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(1, 1fr);
		border-left: 1px solid #b4b5c0;
		border-top: 1px solid #b4b5c0;
		border-right: 1px solid #b4b5c0;
	}
`;

const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 18px 15px;
	text-align: center;
	vertical-align: middle;
	font-size: 18px;
	border-top: 2px solid #3f4550;
	border-right: 1px solid #b4b5c0;
	border-bottom: ${(props) =>
		props.current ? '5px solid #b4b5c0' : '1px solid #b4b5c0'};
	background-color: ${(props) => (props.current ? 'white' : '#f7f7f9')};
	color: ${(props) => (props.current ? '#3F75DA' : '#3F4044')};
	&:hover {
		background-color: white;
		cursor: pointer;
	}
	&:nth-child(1) {
		border-left: 1px solid #b4b5c0;
	}
	@media (max-width: 1000px) {
		border-right: none;
		border-top: none;
		border-bottom: 1px solid #3f4550;
		font-size: 14px;
		padding: 13px 15px;
		&:nth-child(1) {
			border-left: none;
		}
	}
`;

const SLink = styled(Link)`
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 15px;
	@media (max-width: 1000px) {
		font-size: 13px;
	}
`;

const Image = styled.img`
	width: 18px;
	height: 18px;
	margin-right: 10px;
`;
const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
	font-family: 'Do Hyeon', sans-serif;

	h3 {
		font-size: 3rem;
		font-weight: 600;
		margin-top: 40px;
		margin-bottom: 40px;
		display: flex;
		align-items: center;
	}
	span {
		padding-left: 20px;
		font-size: 1.3rem;
		font-weight: 400;
	}
	@media (max-width: 768px) {
		h3 {
			font-size: 2.5rem;
		}
		span {
			padding-left: 12px;
			font-size: 1.1rem;
		}
	}
`;

const LeagueName = ({ location: { pathname } }) => (
	<>
		<Container>
			<List>
				<Item current={pathname === '/league/524'}>
					<SLink to="/league/524">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/epl_on.png"
							alt="league-logo"
						/>
						<span>프리미어리그</span>
					</SLink>
				</Item>
				<Item current={pathname === '/league/775'}>
					<SLink to="/league/775">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/primera_on.png"
							alt="league-logo"
						/>
						<span>라리가</span>
					</SLink>
				</Item>
				<Item current={pathname === '/league/754'}>
					<SLink to="/league/754">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/bundesliga_on.png"
							alt="league-logo"
						/>
						<span>분데스리가</span>
					</SLink>
				</Item>
				<Item current={pathname === '/league/891'}>
					<SLink to="/league/891">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/seria_on.png"
							alt="league-logo"
						/>
						<span>세리에A</span>
					</SLink>
				</Item>
				<Item current={pathname === '/league/525'}>
					<SLink to="/league/525">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/ligue1_on.png"
							alt="league-logo"
						/>
						<span>리그1</span>
					</SLink>
				</Item>
			</List>
		</Container>
		<TitleContainer>
			<h3>
				2019-20<span>종합순위</span>
			</h3>
		</TitleContainer>
	</>
);

export default withRouter(LeagueName);
