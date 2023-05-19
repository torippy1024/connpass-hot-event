import {Link, useLocation} from 'react-router-dom';
import {useSelector} from '../redux/hooks/useSelector';
import {RootState} from '../redux/store';

const ContentPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const location = useLocation();

  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex items-center justify-center m-2 text-3xl'>
        Content
      </div>
      <div className='bg-base-100 m-2 p-4 rounded-xl'>
        {user === undefined ? (
          <div>loading...</div>
        ) : user ? (
          <div>
            ログイン中なのでこのログインユーザー限定コンテンツが閲覧できています。
          </div>
        ) : (
          <div>
            <div className='text-center'>
              このページを閲覧するにはログインが必要です。
            </div>
            <div className='flex justify-center'>
              <Link to={'/auth/login'} state={{from: location.pathname}}>
                <button className='btn text-center'>ログイン</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
