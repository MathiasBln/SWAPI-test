import axios from 'axios';
import { Movies, People, Planet, Starship } from './types/swapiTypes';

export const fetchPeoples = async (): Promise<People[]> => {
  try {
    const response = await axios.get<People[]>(
      'http://localhost:4000/api/swapi/peoples'
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des peoples:', error);
    throw error;
  }
};

export const fetchPlanets = async (): Promise<Planet[]> => {
  try {
    const response = await axios.get<Planet[]>(
      'http://localhost:4000/api/swapi/planets'
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des planets:', error);
    throw error;
  }
};

export const fetchStarships = async (): Promise<Starship[]> => {
  try {
    const response = await axios.get<Starship[]>(
      'http://localhost:4000/api/swapi/starships'
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des starships:', error);
    throw error;
  }
};

export const fetchMovies = async (): Promise<Movies[]> => {
  try {
    const response = await axios.get<Movies[]>(
      'http://localhost:4000/api/swapi/films'
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des films:', error);
    throw error;
  }
};
