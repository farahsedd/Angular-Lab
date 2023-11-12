export interface UserState {
    id: string | null;
    email: string | null;
    isAuthenticated: boolean;
  }
  
  export const initialUserState: UserState = {
    id: null,
    email: null,
    isAuthenticated: false,
  };
  