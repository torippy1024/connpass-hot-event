import {AiOutlineMenu} from 'react-icons/ai';
import HeaderContents from './HeaderContents';

const Navbar = ({drawerId}: {drawerId: string}) => {
  return (
    <div className='navbar bg-base-100 border border-base-200'>
      <div className='flex-none'>
        <label htmlFor={drawerId} className='btn btn-square btn-ghost'>
          <AiOutlineMenu size={24} />
        </label>
      </div>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>Connpass Hot Event</a>
      </div>
      <div className='flex-none hidden lg:block'>
        <HeaderContents />
      </div>
    </div>
  );
};

export default Navbar;
