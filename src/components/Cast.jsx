import { useEffect, useState } from 'react';
import { fetchCast } from './Api/Api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchCast(movieId).then(data => setCast(data));
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(({ name, character, profile_path, id }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path} `}
                alt=""
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
      <img src="" alt="" />
      <p></p>
      <p></p>
    </>
  );
};
