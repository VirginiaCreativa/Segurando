import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/reducer';

export const history = createBrowserHistory();

export default function createReduxStore(preloadedState) {
  const enhancers = [];
  const middleware = [routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || logger;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(thunk, logger, ...middleware)
  );

  const store = createStore(
    rootReducer(history),
    preloadedState,
    composedEnhancers
  );

  if (module.hot) {
    module.hot.accept('../reducers/reducer', () => {
      const nextRootReducer = require('../reducers/reducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
