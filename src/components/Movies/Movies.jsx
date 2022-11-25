import { useState } from 'react';
import { fetchSearch } from 'components/Api/Api';

export const Movies = () => {
  const [searchMovies, setsearchMovies] = useState('');
  const [movies, setMovies] = useState([]);

  const showMovies = e => {
    e.preventDefault();
    fetchSearch(searchMovies).then(data =>
      data.map(movie => setMovies(prevState => [...prevState, movie]))
    );
    setsearchMovies('');
  };

  const search = e => {
    setsearchMovies(e.target.value);
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
