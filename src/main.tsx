import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {Suspense} from 'react';
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import routes from '~react-pages';
import './styles/index.css';
import Layout from './components/layouts/Layout';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {useDispatch} from 'react-redux';
import firebase from './components/firebase';
import {login} from './redux/slices/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          user.getIdToken().then((idToken) => {
            console.log(`token: ${idToken}`);
          });
          dispatch(login(user));
        }
      });
    return () => unregisterAuthObserver(); // クリーンアップ関数
  }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Layout>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
