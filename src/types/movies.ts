export interface MovieType {
  characters: string[];
  created: string;
  edited: string;
  direction: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  title: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface CharacterType {
  birth_year: string;
  gender?: 'male' | 'female' | 'n/a';
  edited: string;
  created: string;
  eye_color: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface SpecieType {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  films: string[];
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  skin_colors: string;
  url: string;
}
