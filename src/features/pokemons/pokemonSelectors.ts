import { RootState } from "../../app/store";
import { pokemonsAdapter, pokemonsSlice } from "./pokemons";

export const pokemonSelectors = pokemonsAdapter.getSelectors<RootState>(
  (state) => state[pokemonsSlice.name]
);
