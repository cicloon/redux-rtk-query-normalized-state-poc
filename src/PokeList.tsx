import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetPokemonListQuery } from "./features/pokemons/pokeAPI";
import { pokemonSelectors } from "./features/pokemons/pokemonSelectors";

export function PokeList() {
  const [page, setPage] = useState(1);

  const incPage = () => {
    setPage(page + 1);
  };

  const { isLoading, isFetching } = useGetPokemonListQuery(page);
  const pokemons = useSelector(pokemonSelectors.selectAll);

  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <>
          {isFetching && <p>Fetching next page</p>}
          <button onClick={incPage}>Fetch next page</button>
          <ul>
            {pokemons.map((pokemon) => (
              <li key={pokemon!.name}>{pokemon!.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
