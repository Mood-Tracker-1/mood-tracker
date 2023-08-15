import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore } from 'redux';
import reducers from './reducers/reducers.js';

const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;