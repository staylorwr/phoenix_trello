import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import reducers from '../reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

export default function configureStore(browserHistory) {

  const reduxRouterMiddleware = syncHistory(browserHistory);
  let middlewares = [reduxRouterMiddleware, thunkMiddleware, loggerMiddleware];
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  return createStoreWithMiddleware(reducers);
}
