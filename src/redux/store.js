import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunkMiddleware];

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);

export default store;