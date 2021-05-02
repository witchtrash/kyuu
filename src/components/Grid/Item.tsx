import React from 'react';
import { Container } from 'components/Layout';
import { useDropzone } from 'react-dropzone';
import styled from '@emotion/styled';

const GridItemContainer = styled(Container)`
  background-color: ${props => props.theme.fn.rgba('powder', 0.7)};
  width: 400px;
  height: 300px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.palette.champagne.hex};
  color: ${props => props.theme.palette.xiketic.hex};
  outline: none;
`;

const ContainedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface GridItemProps {
  imageKey: string;
}

export const GridItem = (props: GridItemProps) => {
  const [image, setImage] = React.useState<string>('');

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles[0]);
    setImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <GridItemContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {image ? <ContainedImage src={image} /> : null}
    </GridItemContainer>
  );
};
