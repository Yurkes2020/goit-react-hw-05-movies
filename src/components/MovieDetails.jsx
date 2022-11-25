import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MovieDetails = ({ movies }) => {
  const [movie, setMovieId] = useState([]);

  const { movieId } = useParams();
  const id = movies.find(option => option.id === Number(movieId));

  useEffect(() => {
    setMovieId(id);
  }, [id]);

  if (!movie) return;

  return (
    <>
      <div>
        <button type="button">Go back</button>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path} `}
          alt=""
        />
        <h2>{movie.name || movie.title}</h2>
        <p>User Score%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genre_ids}</p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};
