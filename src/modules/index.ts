import { combineReducers } from 'redux';
import League from './League';
import Team from './Team';

const rootReducer = combineReducers({
	League,
	Team,
});

// 루트 리듀서 반환
export default rootReducer;

// 루트 리듀서 변환값을 유추
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
