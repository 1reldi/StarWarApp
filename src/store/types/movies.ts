import { MovieType, CharacterType, SpecieType } from '../../types/movies';

export interface initialStateProps {
  moviesList: MovieType[];
  loadingMovies: boolean;
  nextPage: string | null;
  characters: { [characterUrl: string]: CharacterType };
  species: { [specieUrl: string]: SpecieType };
}

export interface getMoviesPayload {
  next: string | null;
  results: MovieType[];
}
export interface getCharacterPayload {
  characterUrl: string;
  characterData: CharacterType;
}
export interface getSpeciePayload {
  specieUrl: string;
  specieData: SpecieType;
}
