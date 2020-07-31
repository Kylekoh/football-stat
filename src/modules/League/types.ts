import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { LeagueTable } from '../../api';

export type LeagueAction = ActionType<typeof actions>;

export type LeagueState = {
	infos: {
		loading: boolean;
		data: LeagueTable | null;
		error: Error | null;
	};
};
