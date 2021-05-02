import styled from '@emotion/styled';

interface GridProps {
  rows: number;
  columns: number;
}

export const Grid = styled.div<GridProps>`
  display: inline-grid;
  column-gap: 0.7rem;
  row-gap: 0.7rem;
  margin: auto;
  padding: 1rem;

  grid-template-columns: ${props => 'auto '.repeat(props.columns)};
  grid-template-rows: ${props => 'auto '.repeat(props.rows)};
`;
