import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@kyuu/state/app/store';
import { App } from '@kyuu/App';

test('renders app', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByTestId('app')).toBeInTheDocument();
});
