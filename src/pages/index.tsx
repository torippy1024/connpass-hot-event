import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      Home
      <Link to='/users/123'>user</Link>
    </div>
  );
};

export default HomePage;
