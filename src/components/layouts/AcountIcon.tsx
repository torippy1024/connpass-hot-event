import {useDispatch} from '../../redux/hooks/useDispatch';
import {logout} from '../../redux/slices/authSlice';
import iconDefault from '../../assets/img/iconDefault.png';
import {useSelector} from '../../redux/hooks/useSelector';
import {RootState} from '../../redux/store';
import {signOut} from '../../repositories/auth';

const AcountIcon = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img src={user?.photoURL ?? iconDefault} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <a className='justify-between'>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a
            onClick={() => {
              signOut();
              dispatch(logout());
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AcountIcon;
