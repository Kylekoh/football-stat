import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Footer = styled.footer`
	margin-top: 200px;
	width: 100%;
	height: 200px;
	padding: 0px 10px;
	border-bottom: 1px solid #e2e2e2;
	background-color: #262626;
	display: flex;
	justify-content: center;
`;
const FooterContainer = styled.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LinkContainer = styled.div`
	display: flex;
	width: 70%;
	flex-direction: column;
	justify-content: center;
	padding-left: 40px;
`;

const SportsLink = styled.ul`
	display: flex;
	flex-direction: row;
	padding-bottom: 23px;

	li {
		font-size: 1rem;
		color: #c5c5c5;
		padding-right: 27px;
	}
`;

const AdLink = styled.ul`
	display: flex;
	flex-direction: row;
	padding-bottom: 23px;
	color: #656565;

	li {
		font-size: 0.8rem;
	}
	span {
		margin: 0 4px;
	}
`;

const CopyrightContainer = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 40px;
	color: #656565;
	span {
		line-height: 1.5rem;
		margin-bottom: 15px;
	}
`;

const FooterComponent = () => (
	<Footer>
		<FooterContainer>
			<LinkContainer>
				<SportsLink>
					<li>스포츠홈</li>
					<li>축구</li>
					<li>해외축구</li>
					<li>야구</li>
					<li>해외야구</li>
					<li>골프</li>
					<li>농구/배구</li>
					<li>일반</li>
					<li>e-스포츠</li>
				</SportsLink>
				<AdLink>
					<li>뉴스 소개</li>
					<span>*</span>
					<li>공지사항</li>
					<span>*</span>
					<li>게시물 운영원칙</li>
					<span>*</span>
					<li>서비스 약관/정책</li>
					<span>*</span>
					<li>비지니스</li>
					<span>*</span>
					<li>권리침해신고</li>
					<span>*</span>
					<li>서비스 원칙</li>
				</AdLink>
			</LinkContainer>
			<CopyrightContainer>
				<span>
					위 내용에 대한 저작권 및 법적 책임은 자료제공사 또는 글쓴이에 있으며,
					Football-Stat의 입장과 다를 수 있습니다.
				</span>
				<p>Copyright ⓒ Football-stat Corp. All rights reserved.</p>
			</CopyrightContainer>
		</FooterContainer>
	</Footer>
);

export default withRouter(FooterComponent);
