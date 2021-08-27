import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { useGetPokemonListQuery } from "./features/pokemons/pokeAPI";
import { pokemonSelectors } from "./features/pokemons/pokemonSelectors";

export function PokeList() {
  const pokemons = useAppSelector(pokemonSelectors.selectAll);
  const [page, setPage] = useState(pokemons.length / 10);
  const { isLoading, isFetching } = useGetPokemonListQuery(page);

  const incPage = () => {
    setPage(page + 1);
  };

  const isEmptyState = isLoading && pokemons.length === 0;

  return (
    <>
      {isEmptyState && <p>Loading</p>}
      {!isEmptyState && (
        <>
          {isFetching && <p>Fetching next page</p>}
          <button onClick={incPage}>Fetch next page</button>
          <ul>
            {pokemons.map((pokemon) => (
              <li key={pokemon!.name}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon!.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
