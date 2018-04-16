import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './modules/containers';
import store from './modules/redux/createStore';
import css from './style/main.scss';

ReactDOM.render(
  <Provider store={ store }>
    <div className={ css.wrapper }>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);