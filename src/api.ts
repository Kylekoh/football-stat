import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
	}
});

export const footballApi = {
	// 리그 순위 테이블
	leagueTable: (league_id) => api.get(`/leagueTable/${league_id}`),
	// 팀 기본 정보(name, country, venue_name...)
	teamInfo: (team_id) => api.get(`/teams/team/${team_id}`),
	// 팀 최근 성적
	teamRecord: (league_id, team_id) =>
		api.get(`/statistics/${league_id}/${team_id}`),
	// 최근 5경기 성적
	recentGameScore: ({ team_id, league_id }) =>
		api.get(`/fixtures/team/${team_id}/${league_id}`),
	// 팀 스쿼드
	squad: (team_id) => api.get(`/players/squad/${team_id}/2019-2020`)
};
