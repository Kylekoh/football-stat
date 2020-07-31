import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { TeamInfos } from '../../api';

export type TeamAction = ActionType<typeof actions>;

export type TeamState = {
	infos: {
		loading: boolean;
		data: TeamInfos | null;
		error: Error | null;
	};
};
