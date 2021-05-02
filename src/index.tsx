import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import { store } from 'state/app/store';
import { Provider } from 'react-redux';
import { ThemeProvider, Global, css } from '@emotion/react';
import { theme } from 'util/theme';
import normalize from 'assets/modern-normalize.module.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            html,
            body {
              height: 100%;
            }
            ${normalize}
          `}
        />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
