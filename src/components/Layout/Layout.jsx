import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, StyledNav, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
          <StyledNav>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movie</StyledLink>
            </li>
          </StyledNav>
      </Header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
