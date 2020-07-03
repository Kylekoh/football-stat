// 덕스 패턴으로 작성
import { footballApi } from '../api';

// console.log(footballApi);
// 리그 순위 조회하기
const GET_LEAGUETABLES = 'GET_LEAGUETABLES'; // 요청 시작
const GET_LEAGUETABLES_SUCCESS = 'GET_LEAGUETABLES_SUCCESS'; // 요청 성공
const GET_LEAGUETABLES_ERROR = 'GET_LEAGUETABLES_ERROR'; // 요청 실패

export const getLeagueTables = (id) => async (dispatch) => {
	dispatch({ type: GET_LEAGUETABLES }); // 요청 시작
	try {
		const tables = await footballApi.leagueTable(id);
		dispatch({ type: GET_LEAGUETABLES_SUCCESS, tables });
	} catch (e) {
		dispatch({ type: GET_LEAGUETABLES_ERROR, error: e });
	}
};

const initialState = {
	tables: {
		loading: false,
		data: null,
		error: null
	}
};

export default function posts(state = initialState, action) {
	switch (action.type) {
		case GET_LEAGUETABLES:
			return {
				...state,
				tables: {
					loading: true,
					data: null,
					error: null
				}
			};
		case GET_LEAGUETABLES_SUCCESS:
			return {
				...state,
				tables: {
					loading: false,
					data: action.tables,
					error: null
				}
			};
		case GET_LEAGUETABLES_ERROR:
			return {
				...state,
				tables: {
					loading: false,
					data: null,
					error: action.error
				}
			};
		default:
			return state;
	}
}
