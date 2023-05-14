import {AiOutlineUser} from 'react-icons/ai';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';

const UserPage = () => {
  const {id} = useParams();
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex items-center justify-center m-2 text-3xl'>
        <AiOutlineUser /> user
      </div>
      <div className='bg-base-100 m-2 p-4 rounded-xl'>
        <div>userId: {id}</div>
        <Link to='/'>
          <button className='btn'>home</button>
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
