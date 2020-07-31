// 덕스 패턴으로 작성
import { footballApi, TeamInfo } from '../api';
import { ActionType } from 'typesafe-actions'

// 팀 정보 조회하기
const GET_TEAMINFO = 'GET_TEAMINFO' as const; // 요청 시작
const GET_TEAMINFO_SUCCESS = 'GET_TEAMINFO_SUCCESS' as const; // 요청 성공
const GET_TEAMINFO_ERROR = 'GET_TEAMINFO_ERROR' as const; // 요청 실패

export const getTeamInfo = (id:number) => async (dispatch) => {
	dispatch({ type: GET_TEAMINFO }); // 요청 시작
	try {
		const infos = await footballApi.teamInfo(id);
		dispatch({ type: GET_TEAMINFO_SUCCESS, infos });
	} catch (e) {
		dispatch({ type: GET_TEAMINFO_ERROR, error: e });
	}
};

export type TeamState = {
	infos: {
		loading: boolean;
		data:  TeamInfo| null
		error: Error | null;
	}
}

const initialState: TeamState = {
	infos: {
		loading: false,
		data: null,
		error: null,
	},
};

export default function teamInfo(state = initialState, action) {
	switch (action.type) {
		case GET_TEAMINFO:
			return {
				...state,
				infos: {
					loading: true,
					data: null,
					error: null,
				},
			};
		case GET_TEAMINFO_SUCCESS:
			return {
				...state,
				infos: {
					loading: false,
					data: action.infos,
					error: null,
				},
			};
		case GET_TEAMINFO_ERROR:
			return {
				...state,
				infos: {
					loading: false,
					data: null,
					error: action.error,
				},
			};
		default:
			return state;
	}
}
