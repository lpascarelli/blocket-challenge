import classes from './pokemon-abilities.module.css';

function PokemonAbilities(props) {
  const firstAbility = props.abilities[0].ability.name;
  const secondAbility = props.abilities[1].ability.name;

  return (
    <div className={classes['pokemon-abilities-container']}>
      <h4>Abilities</h4>
      <div className={classes['pokemon-abilities']}>
        <div className={classes['pokemon-abilities-name']}>{firstAbility}</div>
        <div className={classes['pokemon-abilities-name']}>{secondAbility}</div>
      </div>
    </div>
  );
}

export default PokemonAbilities;
