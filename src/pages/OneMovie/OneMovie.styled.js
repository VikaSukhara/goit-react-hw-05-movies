import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SingleFilmPhoto = styled.img`
  width: 290px;
  height: 480px;
  margin-bottom: 12px;
  border-radius: 5px;
`;

export const TextWrapper = styled.div`
  margin-top: 35px;
  margin-left: 40px;
  width: 1000px;
`;

export const StyledP = styled.p`
  margin-top: 30px;
  font-size: 17px;
`;

export const StyledHeading = styled.h3`
  margin-top: 187px;
  margin-bottom: 20px;
`;

export const StyledGenres = styled.div`
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 40px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 15px;
  font-weight: 400;
  display: block;
  padding-top: 15px;
  margin-left: 20px;
  color: black;

  &.active {
    color: blue;
  }
`;
