import {AiOutlineLogin} from 'react-icons/ai';
import * as firebaseui from 'firebaseui';
import {GoogleAuthProvider, EmailAuthProvider, getAuth} from 'firebase/auth';
import StyledFirebaseAuth from '../../components/firebase/auth/StyledFirebaseAuth';

const HomePage = () => {
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/auth/login',
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      EmailAuthProvider.PROVIDER_ID,
    ],
  };
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex items-center justify-center m-2 text-3xl'>
        <AiOutlineLogin /> Sign in
      </div>
      <div className='bg-base-100 m-2 p-4 rounded-xl'>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />
      </div>
    </div>
  );
};

export default HomePage;
