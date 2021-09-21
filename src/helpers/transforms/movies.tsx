import { MovieType, CharacterType, SpecieType } from '../../types/movies';

export const filterMoviesByName = (
  moviesList: MovieType[],
  movieName: string,
) => {
  return moviesList.filter(({ title }) =>
    title.toLowerCase().includes(movieName.toLowerCase()),
  );
};
