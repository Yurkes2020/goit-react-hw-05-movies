import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetch } from 'Api/Api';
import { List, Movie } from './TrandingList.styled';

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
      <List>
        {movie.map(({ title, id, name, poster_path }) => (
          <li key={id}>
            <Movie to={`movies/${id}`} state={location}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path} `}
                alt={name}
                height="500px"
              />
              {title || name}
            </Movie>
          </li>
        ))}
      </List>
    </main>
  );
};
