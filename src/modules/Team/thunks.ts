import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { TeamAction } from './types';
import { footballApi } from '../../api';
import { getTeamInfoAsync } from './actions';

export const getTeamInfo = (
	id: number
): ThunkAction<void, RootState, null, TeamAction> => async (dispatch) => {
	const { request, success, failure } = getTeamInfoAsync;
	dispatch(request());
	try {
		const infos: any = await footballApi.teamInfo(id);
		dispatch(success(infos));
	} catch (e) {
		dispatch(failure(e));
	}
};
