import { endpoint } from '../constants/api';
import base from './base';
import { CharacterType, SpecieType } from '../types/movies';
import { getMoviesPayload } from '../store/types/movies';

export const getMoviesService = async (nextPageUrl: string = '') => {
  try {
    const url = nextPageUrl || `${endpoint}/films`;
    const response = await base.get(url);
    return response as getMoviesPayload;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getCharacterService = async (characterUrl: string) => {
  try {
    const response = await base.get(characterUrl);
    return response as CharacterType;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getSpecieService = async (specieUrl: string) => {
  try {
    const response = await base.get(specieUrl);
    return response as SpecieType;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
