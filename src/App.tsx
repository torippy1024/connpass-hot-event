import {useEffect, Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from '~react-pages';
import Layout from './components/layouts/Layout';
import firebase from './components/firebase';
import {login, logout} from './redux/slices/authSlice';
import {useDispatch} from './redux/hooks/useDispatch';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          dispatch(login(user));
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
