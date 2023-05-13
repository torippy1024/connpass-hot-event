import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className='font-bold underline text-5xl my-3'>Home</div>
      <div>Hello World!</div>
      <Link to='/users/123'>
        <button className='btn'>user</button>
      </Link>
    </div>
  );
};

export default HomePage;
