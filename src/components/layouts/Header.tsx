import {AiOutlineMenu} from 'react-icons/ai';
import AcountIcon from './AcountIcon';
import HeaderContents from './HeaderContents';
import {Link} from 'react-router-dom';
import {RootState} from '../../redux/store';
import {useSelector} from '../../redux/hooks/useSelector';

const Navbar = ({drawerId}: {drawerId: string}) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className='navbar bg-base-100 border border-base-200'>
      <div className='flex-none'>
        <label htmlFor={drawerId} className='btn btn-square btn-ghost'>
          <AiOutlineMenu size={24} />
        </label>
      </div>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
      </div>
      <div className='flex-none hidden lg:block'>
        <HeaderContents />
      </div>
    </div>
  );
};

export default Navbar;
