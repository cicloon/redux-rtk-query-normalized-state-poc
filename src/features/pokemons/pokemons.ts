import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Pokemon {
  name: string;
  sprites?: {
    front_default: string;
  };
}

export const pokemonsAdapter = createEntityAdapter<Pokemon>({
  selectId: (pokemon) => pokemon.name,
});

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: pokemonsAdapter.getInitialState(),
  reducers: {
    pokemonsFetched: pokemonsAdapter.upsertMany,
    pokemonFetched: pokemonsAdapter.upsertOne,
  },
});
