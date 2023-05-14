const HeaderContents = () => {
  const items = ['item1', 'item2'];
  return (
    <ul className='menu menu-horizontal'>
      {items.map((item, index) => (
        <li key={index}>
          <a>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderContents;
