import React from 'react';
import { Background, Container } from 'components/Layout';

export const App = () => {
  return (
    <div data-testid="app">
      <Background>
        <Container>
          <p>foo</p>
        </Container>
      </Background>
    </div>
  );
};
