import {AiOutlineLogin} from 'react-icons/ai';
import AuthUI from '../../components/auth/AuthUI';

const LoginPage = () => {
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex items-center justify-center m-2 text-3xl'>
        <AiOutlineLogin /> Sign in
      </div>
      <div className='bg-base-100 m-2 p-4 rounded-xl'>
        <AuthUI />
      </div>
    </div>
  );
};

export default LoginPage;
