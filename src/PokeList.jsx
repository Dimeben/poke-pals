import { useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import firstTenResults from "../utils";
import Lottie from "lottie-react";
import pikachiLoading from "./assets/pikachuLoading.json";
import sadPickahu from "./assets/Sad-Pikachu.avif";

const PokeList = ({ searchTerm }) => {
  const [pokemon, setPokemon] = useState([]);
  const [strongAgainst, setStrongAgainst] = useState([]);
  const [weakAgainst, setWeakAgainst] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [noPokemonFound, setNoPokemonFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setNoPokemonFound(false);

    fetch(`https://pokeapi.co/api/v2/type/${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No Pokémon found");
        }
        return response.json();
      })
      .then(({ pokemon, damage_relations }) => {
        setIsLoading(false);
        setIsError(false);

        if (pokemon.length === 0) {
          setNoPokemonFound(true);
          return;
        }

        const firstTenPokemon = firstTenResults(pokemon);
        const strong = damage_relations.double_damage_to.length
          ? damage_relations.double_damage_to
          : [{ name: "Nothing!" }];
        const weak = damage_relations.double_damage_from.length
          ? damage_relations.double_damage_from
          : [{ name: "Nothing!" }];

        setPokemon(firstTenPokemon);
        setStrongAgainst(strong);
        setWeakAgainst(weak);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        if (error.message === "No Pokémon found") {
          setNoPokemonFound(true);
        }
      });
  }, [searchTerm]);

  return (
    <>
      {isLoading && <Lottie id="loading-img" animationData={pikachiLoading} />}
      {isError && <img id="error-img" src={sadPickahu} />}
      {noPokemonFound && <p>No type found</p>}

      {!noPokemonFound && (
        <>
          <ul className="against-list">
            Strong Against:{" "}
            {strongAgainst.map((type, index) => (
              <li key={index} className="strong-list-item">
                {type.name[0].toUpperCase() + type.name.substring(1)}
              </li>
            ))}
          </ul>
          <ul className="against-list">
            Weak Against:{" "}
            {weakAgainst.map((type, index) => (
              <li key={index} className="weak-list">
                {type.name[0].toUpperCase() + type.name.substring(1)}
              </li>
            ))}
          </ul>
          <ul className="poke-list">
            {pokemon.map((poke, index) => (
              <PokeCard key={index} pokemon={poke} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default PokeList;
