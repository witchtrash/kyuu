import styled from '@emotion/styled';

interface GridProps {
  rows: number;
  columns: number;
}

export const Grid = styled.div<GridProps>`
  display: inline-grid;
  column-gap: 1.4rem;
  row-gap: 1.4rem;
  margin: auto;

  grid-template-columns: ${props => 'auto '.repeat(props.columns)};
  grid-template-rows: ${props => 'auto '.repeat(props.rows)};
`;
