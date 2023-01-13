import Image from 'next/image';

import Card from '../ui/card';
import { POKEMON_IMAGE_URL } from '../../constants';
import classes from './pokemon-item.module.css';

function PokemonItem(props) {
  return (
    <Card>
      <div
        className={classes['pokemon-image']}
        onClick={() => props.onPokemonDetails(props.id)}
      >
        <Image
          src={`${POKEMON_IMAGE_URL}/${props.id}.png`}
          alt={props.name}
          width={150}
          height={150}
        />
      </div>
      <span className={classes['pokemon-number']}>N° {props.id}</span>
      <h3 className={classes['pokemon-name']}>{props.name}</h3>
    </Card>
  );
}

export default PokemonItem;
