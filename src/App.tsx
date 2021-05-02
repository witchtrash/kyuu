import React from 'react';
import { Background } from 'components/Layout';
import { Grid, GridItem } from 'components/Grid';
import { Button } from 'components/Button';
import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';
import { theme } from 'util/theme';
import styled from '@emotion/styled';
import '@fontsource/poppins/600.css';

const AppBackground = styled(Background)`
  display: flex;
`;

export const App = () => {
  const gridRef = React.useRef<HTMLDivElement>(null);

  const items = new Array(9)
    .fill(0)
    .map((_, i) => <GridItem imageKey={`image-${i}`} key={`image-${i}`} />);

  const generateImage = () => {
    if (!gridRef.current) {
      return;
    }
    toBlob(gridRef.current, {
      backgroundColor: theme.fn.pastel(),
      style: {
        margin: '0',
      },
    }).then(blob => {
      if (blob) {
        saveAs(blob, `kyuu-collage-${(+new Date()).toString(36).slice(-5)}`);
      }
    });
  };

  return (
    <React.Fragment>
      <AppBackground>
        <Grid ref={gridRef} rows={3} columns={3}>
          {items}
        </Grid>
      </AppBackground>
      <Button onClick={generateImage}>generate!</Button>
    </React.Fragment>
  );
};
