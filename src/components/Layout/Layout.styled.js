import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 25px;
  font-weight: 700;

  &.active {
    color: blue;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
  padding-left: 50px;
`;

export const Header = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #959595;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;
