import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {RootState} from '../redux/store';
import {useSelector} from '../redux/hooks/useSelector';

const HomePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex items-center justify-center m-2 text-3xl'>
        <AiFillHome /> home
      </div>
      <div className='bg-base-100 m-2 p-4 rounded-xl'>
        <div>Hello World!</div>
        <Link to='/users/123'>
          <button className='btn'>user</button>
        </Link>
        <Link to='/auth/login'>
          <button className='btn'>login</button>
        </Link>
        <div>email: {user?.email}</div>
        <div>name: {user?.displayName}</div>
        <div>tel: {user?.phoneNumber}</div>
        <div>photo: {user?.photoURL}</div>
        <div>uid: {user?.uid}</div>
      </div>
    </div>
  );
};

export default HomePage;
