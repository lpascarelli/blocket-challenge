import PokemonItem from './pokemon-item';
import classes from './pokemons.module.css';

function Pokemons(props) {
  const { pokemons } = props;

  const pokemonList = pokemons.map((pokemon, index) => (
    <PokemonItem
      key={`${pokemon.name}-${index + 1}`}
      id={index + 1}
      name={pokemon.name}
    />
  ));

  return <div className={classes['pokemons-container']}>{pokemonList}</div>;
}

export default Pokemons;