import React from 'react';
import { Container } from 'components/Layout';
import { useDropzone } from 'react-dropzone';
import { useAppDispatch, useAppSelector } from 'state/app/hooks';
import { setImage } from 'state/image';
import styled from '@emotion/styled';

const GridItemContainer = styled(Container)`
  background-color: ${props => props.theme.fn.rgba('powder', 0.7)};
  width: 330px;
  height: 270px;
  border-radius: 8px;
  border: 3px solid ${props => props.theme.fn.rgba('babyBlue', 0.4)};
  outline: none;
  transition: 0.2s background-color;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.fn.rgba('babyBlue', 0.3)};
  }
`;

const ContainedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

interface GridItemProps {
  imageKey: string;
}

export const GridItem = ({ imageKey }: GridItemProps) => {
  const dispatch = useAppDispatch();
  const image = useAppSelector(state => state.image[imageKey]);

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      dispatch(
        setImage({
          key: imageKey,
          image: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
    [imageKey, dispatch]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const getImageUrl = React.useCallback(() => {
    console.log(image.original);
    return image.crop ?? image.original;
  }, [image]);

  return (
    <GridItemContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {image ? <ContainedImage src={getImageUrl()} /> : null}
    </GridItemContainer>
  );
};
