import {
  getAuth,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from 'firebase/auth';
// import {doc, getDoc, setDoc} from 'firebase/firestore';
import {login, logout} from '../redux/slices/authSlice';
import {AppDispatch} from '../redux/store';

export const monitorAuthState = (dispatch: AppDispatch) => {
  onAuthStateChanged(getAuth(), async (user) => {
    if (user) {
      // const docRef = doc(db, 'users', user.uid);
      // const docSnap = await getDoc(docRef);
      // if (docSnap.exists()) {
      //   dispatch(update(docSnap.data() as User));
      // } else {
      //   const newUser = {
      //     uid: user.uid,
      //     displayName: user.displayName,
      //     email: user.email,
      //     twitterUrl: '',
      //   };
      //   await setDoc(docRef, newUser);
      //   dispatch(login(newUser));
      // }
      dispatch(login(user));
    } else {
      dispatch(logout());
    }
  });
};

export const signOut = () => {
  firebaseSignOut(getAuth());
};
