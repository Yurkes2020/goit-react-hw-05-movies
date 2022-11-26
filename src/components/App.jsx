import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetch } from './Api/Api';
import { Layout } from './Layout';
import { Movies } from './Movies/Movies';
import { TrandingMovies } from './TrandingList/TrandingList';
import { MovieDetails } from './MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    fetch()
      .then(data =>
        data.map(movie => setMovie(prevState => [...prevState, movie]))
      )
      .catch(error => setError(error.message));
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<TrandingMovies list={movie} error={error} />}
          />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
