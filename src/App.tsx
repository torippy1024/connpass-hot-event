import {useEffect, Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from '~react-pages';
import Layout from './components/layouts/Layout';
import {login, logout} from './redux/slices/authSlice';
import {useDispatch} from './redux/hooks/useDispatch';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      if (user?.providerData[0]) {
        dispatch(login(user.providerData[0]));
      } else {
        dispatch(logout());
      }
    });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Layout>
  );
};

export default App;
