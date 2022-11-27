import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Movie = styled(Link)`
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  display: block;
`;
