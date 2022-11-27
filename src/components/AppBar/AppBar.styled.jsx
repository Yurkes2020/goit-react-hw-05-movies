import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #393030;
  margin-left: 30px;
  text-decoration: none;
  font-size: 30px;

  &.active {
    color: #e29f24;
  }
`;

export const Header = styled.header`
  border-bottom: 4px solid #a7e8b6;
  background-color: #eff5e5;
  margin-bottom: 10px;
`;
