import { useState } from 'react';
import { fetchSearch } from 'components/Api/Api';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const showMovies = e => {
    e.preventDefault();
    if (searchMovies.trim() === '') return;
    fetchSearch(searchMovies).then(data =>
      data.map(movie => setMovies(prevState => [...prevState, movie]))
    );
    setSearchMovies('');
    setMovies([]);
  };

  const search = e => {
    setSearchMovies(e.target.value);
    setSearchParams(e.target.value !== '' ? { filter: e.target.value } : {});
  };

  return (
    <>
      <form onSubmit={showMovies}>
        <input type="text" onChange={search} value={searchMovies} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </>
  );
};
