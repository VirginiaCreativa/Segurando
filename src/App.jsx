import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './redux/store/store';
import Routes from './routes/routes';
import Layout from './layouts/layout';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
