const Li = ({ id, name, selected, onClick }) => {
  const isActive = String(selected) === String(id);

  return (
    <li
      className={`item ${isActive ? 'item active' : 'item'}`}
      onClick={() => onClick(id)}
    >
      {name}
    </li>
  );
}

export default Li;