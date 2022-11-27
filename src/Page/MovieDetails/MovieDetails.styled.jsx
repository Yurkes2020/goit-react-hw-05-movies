import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  text-decoration: none;
  border: 1px solid blue;
  background-color: #7375f3;
  font-weight: bold;
  font-size: 20px;
  color: #f1e82a;
  margin-bottom: 10px;
  margin-left: 10px;
  display: inline-block;
`;

export const Box = styled.div`
  display: flex;
  margin: auto 10px;
`;
