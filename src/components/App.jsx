import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Movies } from './Movies/Movies';
import { TrandingMovies } from './TrandingList/TrandingList';
import { MovieDetails } from './MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrandingMovies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
};
