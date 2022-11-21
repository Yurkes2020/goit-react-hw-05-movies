export const List = ({ tranding }) => {
  return (
    <ul>
      {tranding.map(({ title, id, name }) => (
        <li key={id}>
          <a href="/">{title || name}</a>
        </li>
      ))}
    </ul>
  );
};
