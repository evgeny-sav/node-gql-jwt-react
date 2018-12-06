import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

import App from './components/App/App';
import singleUserReducer from './reducers/singleUser';

const composeEnhancers = composeWithDevTools({});
const logger = createLogger();

const reducers = combineReducers({
  user: singleUserReducer,
});
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, composeEnhancers(middleware));
const renderRoutes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/*" exact render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(renderRoutes(), document.getElementById('root'));
