import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { LeagueAction } from './types';
import { footballApi } from '../../api';
import { getLeagueInfoAsync } from './actions';

export const getLeagueTables = (
	id: number
): ThunkAction<void, RootState, null, LeagueAction> => async (dispatch) => {
	const { request, success, failure } = getLeagueInfoAsync;
	dispatch(request());
	try {
		const tables: any = await footballApi.leagueTable(id);
		console.log(tables);
		dispatch(success(tables));
	} catch (e) {
		dispatch(failure(e));
	}
};
