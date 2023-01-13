import { POKEMON_LIMIT } from '../constants';

export async function getPokemons() {
  const responseJson = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_LIMIT}`
  );
  const response = await responseJson.json();

  return response;
}
