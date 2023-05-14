const DrawerContents = () => {
  const items = ['item1', 'item2'];
  return (
    <ul className='menu p-4 w-80 bg-base-100'>
      {items.map((item, index) => (
        <li key={index}>
          <a>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default DrawerContents;
