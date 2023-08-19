import {Link} from 'react-router-dom';

const HeaderContents = () => {
  const items = [
    {
      text: 'home',
      to: '/',
    },
  ];
  return (
    <ul className='menu menu-horizontal'>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderContents;
