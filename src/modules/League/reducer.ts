import { createReducer } from 'typesafe-actions';
import { LeagueState, LeagueAction } from './types';
import {
	GET_LEAGUETABLES,
	GET_LEAGUETABLES_ERROR,
	GET_LEAGUETABLES_SUCCESS,
} from './actions';

const initialState: LeagueState = {
	tables: {
		loading: false,
		data: null,
		error: null,
	},
};

const teamInfo = createReducer<LeagueState, LeagueAction>(initialState, {
	[GET_LEAGUETABLES]: (state) => ({
		...state,
		tables: {
			loading: true,
			data: null,
			error: null,
		},
	}),
	[GET_LEAGUETABLES_SUCCESS]: (state, action) => ({
		...state,
		tables: {
			loading: false,
			data: action.payload,
			error: null,
		},
	}),
	[GET_LEAGUETABLES_ERROR]: (state, action) => ({
		...state,
		tables: {
			loading: false,
			data: null,
			error: action.payload,
		},
	}),
});

export default teamInfo;
