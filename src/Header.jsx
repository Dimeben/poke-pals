const Header = ({ searchTerm }) => {
  return (
    <>
      <h1 className="header-box">Welcome to PokePals!</h1>
      <p className="header-box" id="instructions">
        To begin, search for a pokemon type to see which types it is strong and
        weak against! Click on them to hear their cry!{" "}
      </p>
      <p className="header-box" id="current-type">
        The current type is <b>{searchTerm}</b>
      </p>
    </>
  );
};

export default Header;
