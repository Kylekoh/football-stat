import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { LeagueTables } from '../../api';

export type LeagueAction = ActionType<typeof actions>;

export type LeagueState = {
	tables: {
		loading: boolean;
		data: LeagueTables | null;
		error: Error | null;
	};
};
