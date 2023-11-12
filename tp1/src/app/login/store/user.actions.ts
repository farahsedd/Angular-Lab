import {  createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../Models/user';

// export const login = createAction('[User] Login', props<{ id: string; email: string }>());
// export const logout = createAction('[User] Logout');

export const authActions = createActionGroup({
    source:"User",
    events:{
        "Login": props<{ id: string; email: string }>() ,
        "Logout": emptyProps(),
        // "Load":props<User>()
    }
})