import AuthUser from '../models/AuthUser';
import {logout, update} from '../redux/slices/authSlice';
import {AppDispatch} from '../redux/store';

export const updateAuth = async (user: AuthUser, dispatch: AppDispatch) => {
  dispatch(update(user));
};

export const signOut = (dispatch: AppDispatch) => {
  dispatch(logout());
};
