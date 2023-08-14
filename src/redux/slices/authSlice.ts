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

export const {logout, update} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
