import styled from '@emotion/styled';

export const Button = styled.button`
  height: 48px;
  width: 330px;
  border-radius: 4px;
  background-color: ${props => props.theme.palette.lightPink.hex};
  color: ${props => props.theme.palette.powder.hex};
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins';

  bottom: 32px;
  outline: none;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  transition: 0.3s margin-bottom, background-color;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.fn.luminescence('lightPink', -3)};
    margin-bottom: 3px;
  }
`;
