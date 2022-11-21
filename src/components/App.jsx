import { useEffect, useState } from 'react';
import { fetch } from './Api/Api';
import { List } from './TrandingList/TrandingList';

export const App = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    fetch()
      .then(data =>
        data.map(({ title, id, name }) =>
          setMovie(prevState => [...prevState, { title, id, name }])
        )
      )
      .catch(error => setError(error.message));
  };

  return (
    <div>
      {error && <h1>Помилка! Щось пішло не так</h1>}
      <header>
        <a href="/">Home</a>
      </header>
      <div>
        <p>Tranding today</p>
        <List tranding={movie} />
      </div>
    </div>
  );
};
