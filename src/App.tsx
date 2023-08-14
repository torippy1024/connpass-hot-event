import {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from '~react-pages';
import Layout from './components/layouts/Layout';

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Layout>
  );
};

export default App;
