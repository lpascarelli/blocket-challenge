import PokemonItem from './pokemon-item';
import classes from './pokemons.module.css';

function Pokemons(props) {
  const { pokemons } = props;

  const pokemonList = pokemons.map((pokemon, index) => (
    <PokemonItem
      key={`${pokemon.name}-${index + 1}`}
      id={pokemon.url.split('/')[6]}
      name={pokemon.name}
    />
  ));

  return (
    <div
      data-testid='pokemons-container'
      className={classes['pokemons-container']}
    >
      {pokemonList}
    </div>
  );
}

export default Pokemons;
