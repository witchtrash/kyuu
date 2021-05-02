import React from 'react';
import { Background } from 'components/Layout';
import { Grid, GridItem } from 'components/Grid';
import styled from '@emotion/styled';

const AppBackground = styled(Background)`
  display: flex;
  flex: 1 1 auto;
`;

export const App = () => {
  return (
    <AppBackground>
      <Grid rows={3} columns={3}>
        <GridItem imageKey="test" />
        <GridItem imageKey="test" />
        <GridItem imageKey="test" />
        <GridItem imageKey="test" />
        <GridItem imageKey="test" />
        <GridItem imageKey="test" />
        <GridItem imageKey="test" />
        <GridItem imageKey="test" />
        <GridItem imageKey="test" />
      </Grid>
    </AppBackground>
  );
};
