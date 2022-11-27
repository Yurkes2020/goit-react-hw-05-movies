import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchId } from '../../components/Api/Api';

const MovieDetails = () => {
  const [movieById, setMovieById] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    fetchId(movieId).then(setMovieById).catch(setError);
  }, [movieId]);

  return (
    <>
      {error && <p>Щось пішло не так</p>}
      {movieById && (
        <div>
          <Link to={location?.state ?? '/'}>Go back</Link>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieById.poster_path} `}
            alt={movieById.name}
          />
          <h2>
            {movieById.name || movieById.title} (
            {`${movieById.release_date?.slice(0, 4)}`})
          </h2>
          <p>{`User Score: ${(movieById?.vote_average * 10).toFixed()}%`}</p>
          <h3>Overview</h3>
          <p>{movieById.overview}</p>
          <h3>Genres</h3>
          <p>{movieById.genres.map(({ name }) => name).join(', ')}</p>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
