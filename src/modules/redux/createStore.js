import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

//TODO: thunk isn't used but added to demonstrate configuration
function configureStore() {
  return createStore(reducer, applyMiddleware(thunk));
}

export default configureStore();