import { ActionReducer, Action } from "@ngrx/store";
import { UserState } from "./user.state";
import { userReducer } from "./user.reducers";


export interface AppState {
    user: UserState
  }
  
  export interface AppStore {
    user: ActionReducer<UserState, Action>;
  }
  
  export const appStore: AppStore = {
    user: userReducer
  }
  
