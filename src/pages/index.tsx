import {Link} from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai';

const HomePage = () => {
  return (
    <div>
      <div className='font-bold underline text-5xl my-3'>Home</div>
      <div>Hello World!</div>
      <Link to='/users/123'>
        <button className='btn'>user</button>
      </Link>
      <AiFillGithub size={32} />
    </div>
  );
};

export default HomePage;
