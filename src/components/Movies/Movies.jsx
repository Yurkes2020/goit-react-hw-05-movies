import { useState, useEffect } from 'react';
import { fetchSearch } from 'components/Api/Api';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

export const Movies = () => {
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
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={location}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
