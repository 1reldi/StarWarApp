import { Dispatch } from 'redux';

import * as MoviesServices from '../../services/movies';
import { MoviesActions } from '../models/movies';

export function getMoviesList(nextPageUrl: string = '') {
  return async (dispatch: Dispatch) => {
    dispatch(MoviesActions.getMoviesListRequest());
    try {
      const moviesResponse = await MoviesServices.getMoviesService(nextPageUrl);
      dispatch(MoviesActions.getMoviesListSuccess(moviesResponse));
    } catch (error) {
      dispatch(MoviesActions.getMoviesListFailure());
    }
  };
}

export function getCharacterInfo(characterUrl: string) {
  return async (dispatch: Dispatch) => {
    try {
      const characterResponse = await MoviesServices.getCharacterService(
        characterUrl,
      );
      dispatch(
        MoviesActions.updateCharacter({
          characterUrl,
          characterData: characterResponse,
        }),
      );
    } catch (error) {}
  };
}

export function getSpecieInfo(specieUrl: string) {
  return async (dispatch: Dispatch) => {
    try {
      const specieResponse = await MoviesServices.getSpecieService(specieUrl);
      dispatch(
        MoviesActions.updateSpecies({
          specieUrl,
          specieData: specieResponse,
        }),
      );
    } catch (error) {}
  };
}

module.exports = {
  getMoviesList,
  getCharacterInfo,
  getSpecieInfo,
  ...MoviesActions,
};
