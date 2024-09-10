import { useState } from "react";

const PokeSearch = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchInput.toLowerCase());
    setSearchInput("");
  };

  return (
    <form className="poke-search" onSubmit={handleSubmit}>
      <label>
        Enter a Pokemon type:
        <input onChange={handleChange} value={searchInput} required={true} />
      </label>
      <button>Search</button>
    </form>
  );
};

export default PokeSearch;
