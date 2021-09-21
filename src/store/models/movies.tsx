import { createSlice } from '@reduxjs/toolkit';

import {
  initialStateProps,
  getMoviesPayload,
  getCharacterPayload,
  getSpeciePayload,
} from '../types/movies';

export const initialState: initialStateProps = {
  moviesList: [],
  loadingMovies: false,
  nextPage: null,
  characters: {},
  species: {},
};

// A slice for recipes with our 3 reducers
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMoviesListRequest: (state: initialStateProps) => {
      state.loadingMovies = true;
    },
    getMoviesListSuccess: (
      state: initialStateProps,
      { payload }: { payload: getMoviesPayload },
    ) => {
      const { results, next } = payload;
      state.moviesList = [...state.moviesList, ...results];
      state.nextPage = next;
      state.loadingMovies = false;
    },
    getMoviesListFailure: (state: initialStateProps) => {
      state.loadingMovies = false;
    },

    updateCharacter: (
      state: initialStateProps,
      { payload }: { payload: getCharacterPayload },
    ) => {
      const { characterUrl, characterData } = payload;
      state.characters = {
        ...state.characters,
        [characterUrl]: characterData,
      };
    },
    updateSpecies: (
      state: initialStateProps,
      { payload }: { payload: getSpeciePayload },
    ) => {
      const { specieUrl, specieData } = payload;
      state.species = {
        ...state.species,
        [specieUrl]: specieData,
      };
    },
  },
});

// The reducer
export default moviesSlice.reducer;

const MoviesActions = moviesSlice.actions;

export { MoviesActions };
