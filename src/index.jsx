import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createReduxStore, { history } from './redux/store/store';
import * as serviceWorker from './serviceWorker';
import './styles/utilis.scss';

import Spinner from './components/UI/spinner/spinner';

import App from './App';

const initialState = {};
const store = createReduxStore(initialState);

const Loader = () => <Spinner />;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={Loader()}>
        <App />
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
