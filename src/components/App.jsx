import { useEffect, useState } from 'react';
import { fetch } from './Api/Api';
import { List } from './TrandingList/TrandingList';

export const App = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch().then(({ data }) =>
      data.results.map(({ title, id, name }) =>
        setMovie(prevState => [...prevState, { title, id, name }])
      )
    );
  }, []);

  return (
    <div>
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
