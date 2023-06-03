import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import AuthUser from '../models/AuthUser';
import {convertFirebaseUserToAuthUser} from './AuthUser';

export const onAuthStateChanged = (
  callback: (user: AuthUser | null) => Promise<void>,
) => {
  onFirebaseAuthStateChanged(getAuth(), async (user) => {
    const authUser = convertFirebaseUserToAuthUser(user);
    callback(authUser);
  });
};

export const signOut = () => {
  firebaseSignOut(getAuth());
};
