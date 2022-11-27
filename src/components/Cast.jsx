import { useEffect, useState } from 'react';
import { fetchCast } from './Api/Api';
import { useParams } from 'react-router-dom';
import NoFoto from '../img/NoFoto.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ name, character, profile_path, id }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path === null || profile_path === undefined
                      ? NoFoto
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Здесь ничего нет</p>
      )}
    </>
  );
};

export default Cast;
