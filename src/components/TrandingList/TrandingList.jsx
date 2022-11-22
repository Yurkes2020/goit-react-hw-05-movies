import { useEffect, useState } from 'react';
import { fetch } from 'components/Api/Api';

export const TrandingMovies = ({ tranding }) => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    fetch()
      .then(data =>
        data.map(({ title, id, name }) =>
          setMovie(prevState => [...prevState, { title, id, name }])
        )
      )
      .catch(error => setError(error.message));
  };
  return (
    <main>
      <h1>Tranding today</h1>
      {error && <h1>Помилка! Щось пішло не так</h1>}
      <ul>
        {movie.map(({ title, id, name }) => (
          <li key={id}>
            <a href="/">{title || name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};
