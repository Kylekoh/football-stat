import { createAsyncAction } from 'typesafe-actions';
import { LeagueTables } from '../../api';
import { AxiosError } from 'axios';

// 리그 순위 조회하기
export const GET_LEAGUETABLES = 'GET_LEAGUETABLES'; // 요청 시작
export const GET_LEAGUETABLES_SUCCESS = 'GET_LEAGUETABLES_SUCCESS'; // 요청 성공
export const GET_LEAGUETABLES_ERROR = 'GET_LEAGUETABLES_ERROR'; // 요청 실패

export const getLeagueInfoAsync = createAsyncAction(
	GET_LEAGUETABLES,
	GET_LEAGUETABLES_SUCCESS,
	GET_LEAGUETABLES_ERROR
)<undefined, LeagueTables, AxiosError>();
