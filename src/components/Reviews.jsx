import { fetchReviews } from './Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
