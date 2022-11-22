import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { MovieSearch } from './Movies/Movies';
import { TrandingMovies } from './TrandingList/TrandingList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrandingMovies />}></Route>
          <Route path="movies" element={<MovieSearch />}></Route>
        </Route>
      </Routes>
    </>
  );
};
