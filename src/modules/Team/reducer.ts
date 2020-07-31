import { createReducer } from 'typesafe-actions';
import { TeamState, TeamAction } from './types';
import {
	GET_TEAMINFO,
	GET_TEAMINFO_ERROR,
	GET_TEAMINFO_SUCCESS,
} from './actions';

const initialState: TeamState = {
	infos: {
		loading: false,
		data: null,
		error: null,
	},
};

const teamInfo = createReducer<TeamState, TeamAction>(initialState, {
	[GET_TEAMINFO]: (state) => ({
		...state,
		infos: {
			loading: true,
			data: null,
			error: null,
		},
	}),
	[GET_TEAMINFO_SUCCESS]: (state, action) => ({
		...state,
		infos: {
			loading: false,
			data: action.payload,
			error: null,
		},
	}),
	[GET_TEAMINFO_ERROR]: (state, action) => ({
		...state,
		infos: {
			loading: false,
			data: null,
			error: action.payload,
		},
	}),
});

export default teamInfo;
