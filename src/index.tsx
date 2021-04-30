import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@kyuu/App';
import { store } from '@kyuu/state/app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
