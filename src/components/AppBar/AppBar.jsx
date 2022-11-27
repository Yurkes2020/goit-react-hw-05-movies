import { StyledLink, Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </nav>
    </Header>
  );
};
