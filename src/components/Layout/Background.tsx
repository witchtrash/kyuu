import styled from '@emotion/styled';
import { Container } from './Container';

export const Background = styled(Container)`
  background-color: ${props => props.theme.fn.rgba('lightPink', 0.3)};
  min-height: 100vh;
  overflow: auto;
`;
