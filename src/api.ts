import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
	},
});

export const footballApi = {
	// 리그 순위 테이블
	leagueTable: (league_id: number) =>
		api.get<LeagueTable>(`/leagueTable/${league_id}`),
	// 팀 기본 정보(name, country, venue_name...)
	teamInfo: (team_id: number) => api.get<TeamInfo>(`/teams/team/${team_id}`),
	// // 팀 최근 성적
	// teamRecord: (league_id, team_id) =>
	// 	api.get(`/statistics/${league_id}/${team_id}`),
	// // 최근 5경기 성적
	// recentGameScore: ({ team_id, league_id }) =>
	// 	api.get(`/fixtures/team/${team_id}/${league_id}`),
	// // 팀 스쿼드
	// squad: (team_id) => api.get(`/players/squad/${team_id}/2019-2020`),
};

// leagueTable interface
export interface LeagueTable {
	api: LeagueAPI;
}

export interface LeagueAPI {
	results: number;
	standings: Array<Standing[]>;
}

export interface Standing {
	rank: number;
	team_id: number;
	teamName: string;
	logo: string;
	group: string;
	forme: string;
	status: string;
	description: null | string;
	all: All;
	home: All;
	away: All;
	goalsDiff: number;
	points: number;
	lastUpdate: Date;
}

export interface All {
	matchsPlayed: number;
	win: number;
	draw: number;
	lose: number;
	goalsFor: number;
	goalsAgainst: number;
}

// teamInfo interface
export interface TeamInfo {
	api: TeamAPI;
}

export interface TeamAPI {
	results: number;
	teams: Team[];
}

export interface Team {
	team_id: number;
	name: string;
	code: null;
	logo: string;
	country: string;
	is_national: boolean;
	founded: number;
	venue_name: string;
	venue_surface: string;
	venue_address: string;
	venue_city: string;
	venue_capacity: number;
}
