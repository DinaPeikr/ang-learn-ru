import {Action, createReducer} from '@ngrx/store';

export interface IUser {
  name: string;
  bonuses: number;
}

const initialState: IUser = {
    name: 'Diana',
    bonuses: 0.8,
  }
;

const userReducer = createReducer(
  initialState
);

export function userReducers(state: IUser, action: Action): any {
  return userReducer(state, action);
}

