import { createAsyncAction } from 'typesafe-actions';
import { TeamInfo } from '../../api';
import { AxiosError } from 'axios';

export const GET_TEAMINFO = 'GET_TEAMINFO'; // 요청 시작
export const GET_TEAMINFO_SUCCESS = 'GET_TEAMINFO_SUCCESS'; // 요청 성공
export const GET_TEAMINFO_ERROR = 'GET_TEAMINFO_ERROR'; // 요청 실패

export const getTeamInfoAsync = createAsyncAction(
	GET_TEAMINFO,
	GET_TEAMINFO_SUCCESS,
	GET_TEAMINFO_ERROR
)<undefined, TeamInfo, AxiosError>();
