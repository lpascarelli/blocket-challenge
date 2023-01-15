import { POKEMON_LIMIT } from '../constants';

export async function getPokemons() {
  try {
    const responseJson = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_LIMIT}`
    );
    const response = await responseJson.json();

    return { ok: true, data: response };
  } catch (error) {
    return {
      ok: false,
      data: {
        message:
          'There was an error while fetching pokemons. Please, try again later',
      },
    };
  }
}

export async function getPokemonById(id) {
  try {
    const responseJson = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const response = await responseJson.json();

    return { ok: true, data: response };
  } catch (error) {
    return {
      ok: false,
      data: {
        message:
          'There was an error while fetching the pokemon. Please, try again later',
      },
    };
  }
}
