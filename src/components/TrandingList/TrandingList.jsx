import { useEffect, useState } from 'react';
import { fetch } from 'components/Api/Api';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const TrandingMovies = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const { productId } = useParams();

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
            <Link to="movies/:movieId">{title || name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
