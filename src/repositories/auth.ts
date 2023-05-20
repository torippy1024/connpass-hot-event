import {
  getAuth,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import {doc, getDoc, setDoc, getFirestore} from 'firebase/firestore';
import {AuthUser, login, logout} from '../redux/slices/authSlice';
import {AppDispatch} from '../redux/store';

export const monitorAuthState = (dispatch: AppDispatch) => {
  const db = getFirestore();

  onAuthStateChanged(getAuth(), async (user) => {
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const dbUser = docSnap.data() as AuthUser;
        dispatch(login(dbUser));
      } else {
        const newUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
        };
        await setDoc(docRef, newUser);
        dispatch(login(newUser));
      }
    } else {
      dispatch(logout());
    }
  });
};

export const signOut = () => {
  firebaseSignOut(getAuth());
};
