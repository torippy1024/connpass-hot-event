import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AuthUser from '../../models/AuthUser';

type AuthState = {
  user?: AuthUser | null;
};

const initialState: AuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    update: (state, action: PayloadAction<AuthUser>) => {
      if (state.user) {
        state.user = {...state.user, ...action.payload};
      }
    },
  },
});

export const {login, logout, update} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
