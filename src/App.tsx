import {useEffect, Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from '~react-pages';
import Layout from './components/layouts/Layout';
import {useDispatch} from './redux/hooks/useDispatch';
import {monitorAuthState} from './repositories/auth';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    monitorAuthState(dispatch);
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Layout>
  );
};

export default App;
