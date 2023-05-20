import {
  getAuth,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import {doc, getDoc, setDoc, getFirestore} from 'firebase/firestore';
import {login, logout} from '../redux/slices/authSlice';
import {AppDispatch} from '../redux/store';

export const monitorAuthState = (dispatch: AppDispatch) => {
  const db = getFirestore();

  onAuthStateChanged(getAuth(), async (user) => {
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(login(user));
        // dispatch(update(docSnap.data() as User));
      } else {
        const newUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          twitterUrl: '',
        };
        await setDoc(docRef, newUser);
        dispatch(login(user));
      }
      // dispatch(login(user));
    } else {
      dispatch(logout());
    }
  });
};

export const signOut = () => {
  firebaseSignOut(getAuth());
};
