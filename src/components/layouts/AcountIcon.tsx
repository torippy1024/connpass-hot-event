import {useDispatch} from '../../redux/hooks/useDispatch';
import {logout} from '../../redux/slices/authSlice';
import firebase from '../firebase';

const AcountIcon = () => {
  const dispatch = useDispatch();

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img src='/img/icon/icon.png' />
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
              firebase
                .auth()
                .signOut()
                .then(() => {
                  console.log('logout');
                });
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
