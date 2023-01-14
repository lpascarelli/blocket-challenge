import { POKEMON_STATS } from '../../../constants';
import classes from './pokemon-stat.module.css';

function PokemonStat(props) {
  return (
    <div className={classes['pokemon-stat']}>
      <div
        className={classes['pokemon-stat-name']}
        style={{ background: POKEMON_STATS[`${props.stat}`].background }}
      >
        {POKEMON_STATS[`${props.stat}`].name}
      </div>
      <h5>{props.value}</h5>
    </div>
  );
}

export default PokemonStat;
