import { useState, useEffect } from "react";

const PokeCard = ({ pokemon }) => {
  const [pokemonImg, setPokemonImg] = useState("");
  const [pokemonMove, setPokemonMove] = useState("");
  const [cry, setCry] = useState("");
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
      .then(({ sprites, moves, cries }) => {
        console.log(cries.latest);
        setIsLoading(false);
        setIsError(false);
        setPokemonImg(sprites.front_default);
        setPokemonMove(
          moves[Math.floor(Math.random() * moves.length)].move.name
        );
        setCry(cries.latest);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        if (error.message === "No Pokémon found") {
          setNoPokemonFound(true);
        }
      });
  }, [pokemon]);

  const playCry = () => {
    if (cry) {
      const audio = new Audio(cry);
      audio.play();
    }
  };

  return (
    <li className="poke-card">
      <h2>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
      {pokemonImg && (
        <img
          onClick={playCry}
          onPress={playCry}
          className="pokemon-sprite"
          alt={pokemon.name}
          src={pokemonImg}
        />
      )}
      <h3>
        Random move:{" "}
        {pokemonMove
          ? pokemonMove[0].toUpperCase() + pokemonMove.substring(1)
          : null}
      </h3>
    </li>
  );
};

export default PokeCard;
