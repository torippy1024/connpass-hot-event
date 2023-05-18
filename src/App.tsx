import {useEffect, Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from '~react-pages';
import Layout from './components/layouts/Layout';
import firebase from './components/firebase';
import {login} from './redux/slices/authSlice';
import './styles/index.css';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          dispatch(login(user));
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
