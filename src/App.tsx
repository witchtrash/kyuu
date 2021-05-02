import React from 'react';
import { useAppDispatch, useAppSelector } from 'state/app/hooks';
import { Grid, GridItem } from 'components/Grid';
import { Background } from 'components/Layout';
import { Button } from 'components/Button';
import { toJpeg } from 'html-to-image';
import { saveAs } from 'file-saver';
import styled from '@emotion/styled';
import '@fontsource/poppins/600.css';
import { imageKeySelector, setImage } from 'state/image';

const AppBackground = styled(Background)`
  display: flex;
`;

export const App = () => {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const images = useAppSelector(state => imageKeySelector(state));

  const items = new Array(9)
    .fill(0)
    .map((_, i) => <GridItem imageKey={`image-${i}`} key={`image-${i}`} />);

  const generateImage = () => {
    if (!gridRef.current) {
      return;
    }
    toJpeg(gridRef.current, {
      backgroundColor: '#ffe6e6',
      style: {
        margin: '0',
      },
    }).then(blob => {
      if (blob) {
        saveAs(blob, `kyuu-collage-${(+new Date()).toString(36).slice(-5)}`);
      }
    });
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const data = e.clipboardData;

    if (data.files.length) {
      const file = data.files[0];

      if (file.type.substring(0, 5) === 'image') {
        if (images.length != 9) {
          for (let i = 0; i < 9; i++) {
            const testKey = `image-${i}`;
            if (!images.includes(testKey)) {
              dispatch(
                setImage({
                  image: URL.createObjectURL(file),
                  key: `image-${i}`,
                })
              );
              break;
            }
          }
        }
      }
    }
  };

  return (
    <React.Fragment>
      <AppBackground onPaste={handlePaste}>
        <Grid ref={gridRef} rows={3} columns={3}>
          {items}
        </Grid>
      </AppBackground>
      <Button onClick={generateImage}>generate!</Button>
    </React.Fragment>
  );
};
