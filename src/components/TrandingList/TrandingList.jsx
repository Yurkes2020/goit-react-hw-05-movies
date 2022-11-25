import { Link } from 'react-router-dom';

export const TrandingMovies = ({ list, error }) => {
  return (
    <main>
      <h1>Tranding today</h1>
      {error && <h1>Помилка! Щось пішло не так</h1>}
      <ul>
        {list.map(({ title, id, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
