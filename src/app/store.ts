import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { pokemonApi } from "../features/pokemons/pokeAPI";
import { pokemonsSlice } from "../features/pokemons/pokemons";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemons: pokemonsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
