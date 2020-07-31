import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { TeamInfo } from '../../api';

export type TeamAction = ActionType<typeof actions>;

export type TeamState = {
	infos: {
		loading: boolean;
		data: TeamInfo | null;
		error: Error | null;
	};
};
