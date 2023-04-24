import {combineReducers} from 'redux';
import { likeReducer } from './likeReducer';

export const rootReducer = combineReducers({
  like: likeReducer,
})

export type RootState = ReturnType<typeof rootReducer>