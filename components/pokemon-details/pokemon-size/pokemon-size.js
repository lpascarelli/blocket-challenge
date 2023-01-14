import classes from './pokemon-size.module.css';

function PokemonSize(props) {
  return (
    <div className={classes['pokemon-size-details']}>
      <div className={classes['pokemon-size-container']}>
        <h4>Height</h4>
        <div className={classes['pokemon-size']}>{props.height}m</div>
      </div>
      <div className={classes['pokemon-size-container']}>
        <h4>Weight</h4>
        <div className={classes['pokemon-size']}>{props.weight}kg</div>
      </div>
    </div>
  );
}

export default PokemonSize;
