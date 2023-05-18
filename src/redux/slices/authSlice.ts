import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserInfo as User} from 'firebase/auth';

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {user: null};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {login, logout} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
