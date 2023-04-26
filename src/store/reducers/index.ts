import {combineReducers} from 'redux';
import { TagReducer } from './TagReducer';

export const rootReducer = combineReducers({
  tag: TagReducer,
})

export type RootState = ReturnType<typeof rootReducer>