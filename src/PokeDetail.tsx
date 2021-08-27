import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "./app/hooks";

import { useGetPokemonByNameQuery } from "./features/pokemons/pokeAPI";

import { pokemonSelectors } from "./features/pokemons/pokemonSelectors";

export interface PokeDetailProps {
  name: string;
}

export function PokeDetail({ name }: PokeDetailProps) {
  const { isLoading } = useGetPokemonByNameQuery(name);
  const pokemon = useAppSelector((state) =>
    pokemonSelectors.selectById(state, name)
  );

  const isEmptyState = isLoading && !!!pokemon;

  return (
    <>
      {isEmptyState && <p>Loading</p>}

      {!isEmptyState && (
        <div>
          <Link to="/">Back to list</Link>

          <p>Name: {pokemon!.name} </p>
          <img alt="front_default" src={pokemon!.sprites?.front_default}></img>
        </div>
      )}
    </>
  );
}
