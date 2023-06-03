import AuthUser from '../models/AuthUser';
import {login, logout, update} from '../redux/slices/authSlice';
import {AppDispatch} from '../redux/store';
import {getAuthUser, setAuthUser} from '../repositories/AuthUser';
import {
  onAuthStateChanged,
  signOut as signOutRepository,
} from '../repositories/auth';

export const monitorAuthState = (dispatch: AppDispatch) => {
  onAuthStateChanged(async (user) => {
    if (user) {
      const dbUser = await getAuthUser(user.uid);
      if (dbUser) {
        dispatch(login(dbUser));
      } else {
        await setAuthUser(user);
        dispatch(login(user));
      }
    } else {
      dispatch(logout());
    }
  });
};

export const updateAuth = async (user: AuthUser, dispatch: AppDispatch) => {
  await setAuthUser(user);
  dispatch(update(user));
};

export const signOut = (dispatch: AppDispatch) => {
  signOutRepository();
  dispatch(logout());
};
