// 덕스 패턴으로 작성
import { footballApi } from '../api';

// 팀 정보 조회하기
const GET_TEAMINFO = 'GET_TEAMINFO'; // 요청 시작
const GET_TEAMINFO_SUCCESS = 'GET_TEAMINFO_SUCCESS'; // 요청 성공
const GET_TEAMINFO_ERROR = 'GET_TEAMINFO_ERROR'; // 요청 실패

export const getTeamInfo = (id) => async (dispatch) => {
	dispatch({ type: GET_TEAMINFO }); // 요청 시작
	try {
		const infos = await footballApi.teamInfo(id);
		console.log(infos);
		dispatch({ type: GET_TEAMINFO_SUCCESS, infos });
	} catch (e) {
		dispatch({ type: GET_TEAMINFO_ERROR, error: e });
	}
};

const initialState = {
	infos: {
		loading: false,
		data: null,
		error: null
	}
};

export default function teamInfo(state = initialState, action) {
	switch (action.type) {
		case GET_TEAMINFO:
			return {
				...state,
				infos: {
					loading: true,
					data: null,
					error: null
				}
			};
		case GET_TEAMINFO_SUCCESS:
			return {
				...state,
				infos: {
					loading: false,
					data: action.infos,
					error: null
				}
			};
		case GET_TEAMINFO_ERROR:
			return {
				...state,
				infos: {
					loading: false,
					data: null,
					error: action.error
				}
			};
		default:
			return state;
	}
}
