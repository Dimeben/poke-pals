import { useState, useEffect } from "react";

const PokeCard = ({ pokemon }) => {
  const [pokemonImg, setPokemonImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [noPokemonFound, setNoPokemonFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setNoPokemonFound(false);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No Pokémon found");
        }
        return response.json();
      })
      .then(({ sprites }) => {
        setIsLoading(false);
        setIsError(false);
        setPokemonImg(sprites.front_default);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        if (error.message === "No Pokémon found") {
          setNoPokemonFound(true);
        }
      });
  }, [pokemon]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (noPokemonFound) {
    return <p>No Pokémon found</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <li className="poke-card">
      <h2>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
      {pokemonImg && (
        <img className="pokemon-sprite" alt={pokemon.name} src={pokemonImg} />
      )}
    </li>
  );
};

export default PokeCard;
