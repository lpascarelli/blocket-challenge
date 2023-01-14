import PokemonStat from './pokemon-stat';
import classes from './pokemon-stats.module.css';

function PokemonStats(props) {
  const stats = props.stats.map((stat, index) => (
    <PokemonStat
      key={`${stat['base_stat']}-${index}`}
      stat={stat.stat.name}
      value={stat['base_stat']}
    />
  ));

  return (
    <div className={classes['pokemon-stats-container']}>
      <h4>Stats</h4>
      <div className={classes.flexed}>{stats}</div>
    </div>
  );
}

export default PokemonStats;
