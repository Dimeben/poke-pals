const Header = ({ searchTerm }) => {
  return (
    <>
      <h1>Welcome to PokePals!</h1>
      <p id="instructions">
        To begin, search for a pokemon type to see which types it is strong and
        weak against!{" "}
      </p>
      <p id="current-type">
        The current type is <b>{searchTerm}</b>
      </p>
    </>
  );
};

export default Header;
