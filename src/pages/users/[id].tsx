import {useParams} from 'react-router';

const UserPage = () => {
  const {id} = useParams();
  return <div>user: {id}</div>;
};

export default UserPage;
