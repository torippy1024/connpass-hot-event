import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserInfo} from 'firebase/auth';

type AuthState = {
  user?: UserInfo | null;
};

const initialState: AuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
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
