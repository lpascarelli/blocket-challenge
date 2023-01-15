import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomePage from '../pages/index';
import { pokemons } from './constants';

describe('HomePage', () => {
  it('should renders my home page', () => {
    render(<HomePage pokemons={pokemons} />);

    const input = screen.getByPlaceholderText('Search your pokemon');
    const pokemonsContainer = screen.getByTestId('pokemons-container');

    expect(input).toBeInTheDocument();
    expect(pokemonsContainer).toBeInTheDocument();
  });

  it('should test onChange behaviour', () => {
    render(<HomePage pokemons={pokemons} />);

    const input = screen.getByPlaceholderText('Search your pokemon');
    fireEvent.change(input, { target: { value: 'An input value' } });

    expect(input.value).toBe('An input value');
  });
});
