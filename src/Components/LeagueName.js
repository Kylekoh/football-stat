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
	max-width: 1150px;
	display: grid;
	background-color: #f7f7f9;
	flex-direction: row;
	grid-template-columns: repeat(5, 1fr);
	padding: 0;
`;

const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 25px 30px;
	text-align: center;
	vertical-align: middle;
	font-size: 19px;
	border-top: 2px solid #3f4550;
	border-right: 1px solid #b4b5c0;
	border-bottom: 1px solid #b4b5c0;
	&:hover {
		background-color: white;
		cursor: pointer;
	}
	&:nth-child(1) {
		border-left: 1px solid #b4b5c0;
	}
`;

const SLink = styled(Link)`
	display: flex;
	align-items: center;
	font-weight: 600;
`;

const Image = styled.img`
	width: 23px;
	height: 23px;
	margin-right: 10px;
`;

const LeagueName = (props) => (
	<>
		<Container>
			<List>
				<Item>
					<SLink to="/league/524">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/epl_on.png"
							alt="league-logo"
						/>
						<span>프리미어리그</span>
					</SLink>
				</Item>
				<Item>
					<SLink to="/league/775">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/primera_on.png"
							alt="league-logo"
						/>
						<span>라리가</span>
					</SLink>
				</Item>
				<Item>
					<SLink to="/league/754">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/bundesliga_on.png"
							alt="league-logo"
						/>
						<span>분데스리가</span>
					</SLink>
				</Item>
				<Item>
					<SLink to="/league/891">
						<Image
							src="https://imgsports.pstatic.net/images/2016/pc/common/league/seria_on.png"
							alt="league-logo"
						/>
						<span>세리에A</span>
					</SLink>
				</Item>
				<Item>
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
	</>
);

export default withRouter(LeagueName);
