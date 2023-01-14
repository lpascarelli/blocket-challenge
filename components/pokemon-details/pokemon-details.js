import Image from 'next/image';

import PokemonAbilities from './pokemon-abilities/pokemon-abilities';
import PokemonSize from './pokemon-size/pokemon-size';
import PokemonStats from './pokemon-stats/pokemon-stats';
import classes from './pokemon-details.module.css';

function PokemonDetails(props) {
  return (
    <div className={classes['pokemon-details-container']}>
      <div className={classes['pokemon-image']}>
        <Image src={props.image} alt={props.name} width={300} height={300} />
      </div>
      <span className={classes['pokemon-number']}>N° {props.id}</span>
      <h1 className={classes['pokemon-name']}>{props.name}</h1>
      <PokemonSize height={props.height} weight={props.weight} />
      <PokemonAbilities abilities={props.abilities} />
      <PokemonStats stats={props.stats} />
    </div>
  );
}

export default PokemonDetails;
