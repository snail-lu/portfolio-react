import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import todoApp from './redux/reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
