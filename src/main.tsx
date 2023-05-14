import React from 'react';
import ReactDOM from 'react-dom/client';
import {Suspense} from 'react';
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import routes from '~react-pages';
import './styles/index.css';
import Layout from './components/layouts/Layout';

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Layout>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
