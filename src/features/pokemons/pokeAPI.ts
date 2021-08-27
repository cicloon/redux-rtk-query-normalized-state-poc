import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon, pokemonsSlice } from "./pokemons";

const PER_PAGE = 10;

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const response = await queryFulfilled;
        dispatch(pokemonsSlice.actions.pokemonFetched(response.data));
      },
    }),

    getPokemonList: builder.query<{ results: Pokemon[] }, number>({
      query: (page) => {
        const offset = page && page > 0 ? (page - 1) * PER_PAGE : 0;
        return `pokemon?offset=${offset}&limit=${PER_PAGE}`;
      },

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const response = await queryFulfilled;
        dispatch(pokemonsSlice.actions.pokemonsFetched(response.data.results));
      },
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi;
