import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomePage from '../pages/index';
import { mockedPokemonsData, mockedPokemonsDataError } from './constants';

describe('HomePage', () => {
  it('should renders my home page', () => {
    render(
      <HomePage
        ok={mockedPokemonsData.ok}
        pokemons={mockedPokemonsData.pokemons}
      />
    );

    const input = screen.getByPlaceholderText('Search your pokemon');
    const pokemonsContainer = screen.getByTestId('pokemons-container');

    expect(input).toBeInTheDocument();
    expect(pokemonsContainer).toBeInTheDocument();
  });

  it('should test onChange behaviour', () => {
    render(
      <HomePage
        ok={mockedPokemonsData.ok}
        pokemons={mockedPokemonsData.pokemons}
      />
    );

    const input = screen.getByPlaceholderText('Search your pokemon');
    fireEvent.change(input, { target: { value: 'An input value' } });

    expect(input.value).toBe('An input value');
  });

  it('should render ErrorAlert component when gets an error', () => {
    render(
      <HomePage
        ok={mockedPokemonsDataError.ok}
        pokemons={mockedPokemonsDataError.pokemons}
      />
    );

    const divErrorComponent = screen.getByText(
      'There was an error while fetching pokemons. Please, try again later'
    );

    expect(divErrorComponent).toBeInTheDocument();
  });
});
