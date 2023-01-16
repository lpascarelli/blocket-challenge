export const mockedPokemonsData = {
  ok: true,
  pokemons: {
    count: 0,
    next: '',
    previous: null,
    results: [],
  },
};

export const mockedPokemonsDataError = {
  ok: false,
  pokemons: {
    message:
      'There was an error while fetching pokemons. Please, try again later',
  },
};
