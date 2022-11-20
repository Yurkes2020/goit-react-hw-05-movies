export const List = ({ tranding }) => {
  return (
    <ul>
      {tranding.map(({ title, id, name }) => (
        <li key={id}>{title || name}</li>
      ))}
    </ul>
  );
};
