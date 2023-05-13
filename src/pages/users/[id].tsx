import {useParams} from 'react-router';
import {Link} from 'react-router-dom';

const UserPage = () => {
  const {id} = useParams();
  return (
    <div>
      <div className='font-bold underline text-5xl my-3'>User</div>
      <div>userId: {id}</div>
      <Link to='/'>
        <button className='btn'>home</button>
      </Link>
    </div>
  );
};

export default UserPage;
