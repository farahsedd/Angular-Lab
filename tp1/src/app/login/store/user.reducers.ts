import { createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';
import { initialUserState } from './user.state';
import { User } from '../Models/user';

export const userReducer = createReducer(
  initialUserState,
  on(userActions.authActions.login, (state, { id, email }) => ({ ...state, id, email, isAuthenticated: true })),
  on(userActions.authActions.logout, (state) => ({ ...state,  isAuthenticated: false })),
  // on(userActions.authActions.load,(state,user : User) => ({ ...state,}))
);
