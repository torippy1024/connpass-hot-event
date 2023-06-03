import {doc, getDoc, setDoc, getFirestore} from 'firebase/firestore';
import AuthUser from '../models/AuthUser';
import {UserInfo as FirebaseUser} from 'firebase/auth';

export const getAuthUser = async (uid: string) => {
  const db = getFirestore();
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const dbUser = docSnap.data() as AuthUser;
    return dbUser;
  } else {
    return null;
  }
};

export const convertFirebaseUserToAuthUser = (user: FirebaseUser | null) => {
  if (user) {
    const authUser: AuthUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
    };
    return authUser;
  } else {
    return null;
  }
};

export const setAuthUser = async (user: AuthUser) => {
  const db = getFirestore();
  const docRef = doc(db, 'users', user.uid);
  await setDoc(docRef, user);
};
