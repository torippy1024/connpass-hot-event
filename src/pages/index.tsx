import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';

const HomePage = () => {
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
      </div>
    </div>
  );
};

export default HomePage;
