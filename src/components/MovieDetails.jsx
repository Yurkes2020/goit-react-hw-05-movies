import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchId } from './Api/Api';

export const MovieDetails = ({ movies }) => {
  const [movieById, setMovieById] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchId(movieId).then(data => setMovieById(data));
  }, [movieId]);

  return (
    <>
      <div>
        <Link to="/">Go back</Link>

        <img
          src={`https://image.tmdb.org/t/p/w500/${movieById.backdrop_path} `}
          alt=""
        />
        <h2>{movieById.name || movieById.title}</h2>
        <p>User Score%</p>
        <h3>Overview</h3>
        <p>{movieById.overview}</p>
        <h3>Genres</h3>
        <p>{movieById.genre_ids}</p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews </Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
};
