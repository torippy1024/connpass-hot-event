import {Link} from 'react-router-dom';

const DrawerContents = () => {
  const items = [
    {
      text: 'home',
      to: '/',
    },
  ];
  return (
    <ul className='menu p-4 w-80 bg-base-100'>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DrawerContents;
