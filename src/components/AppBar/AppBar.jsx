import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </nav>
    </header>
  );
};
