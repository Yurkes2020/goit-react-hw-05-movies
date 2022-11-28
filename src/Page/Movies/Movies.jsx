import { useState, useEffect } from 'react';
import { fetchSearch } from 'Api/Api';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { List } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!queryMovie) return;
    fetchSearch(queryMovie).then(setMovies);
  }, [queryMovie]);

  const showMovies = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.name.value });
  };

  return (
    <>
      <form onSubmit={showMovies}>
        <input type="text" name="name" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <List>
          {movies.map(({ title, id, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={location}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path} `}
                    alt={title}
                    height="500px"
                  />
                  {title}
                </Link>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};
export default Movies;
