import Image from 'next/image';
import { useRouter } from 'next/router';

import Card from '../ui/card';
import { POKEMON_IMAGE_URL } from '../../constants';
import classes from './pokemon-item.module.css';

function PokemonItem(props) {
  const router = useRouter();

  const goToPokemonPage = () => {
    router.push(`/pokemon/${props.id}`);
  }

  return (
    <Card onClick={goToPokemonPage}>
      <div className={classes['pokemon-image']}>
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
