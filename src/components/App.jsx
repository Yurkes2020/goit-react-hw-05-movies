import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { Home } from '../Page/TrandingList/TrandingList';

const Movies = lazy(() => import('../Page/Movies/Movies'));
const MovieDetails = lazy(() => import('../Page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
