import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetch } from 'components/Api/Api';

export const Home = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    fetch().then(setMovie).catch(setError);
  };
  return (
    <main>
      <h1>Tranding today</h1>
      {error && <h1>Помилка! Щось пішло не так</h1>}
      <ul>
        {movie.map(({ title, id, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={location}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
