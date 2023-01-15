import Link from 'next/link';

import ErrorAlert from '../../components/ui/error-alert';
import PokemonDetails from '../../components/pokemon-details/pokemon-details';
import { getPokemonById } from '../../api-utils';

function PokemonPage(props) {
  const { ok, pokemon } = props;

  if (!ok) {
    return (
      <div className='text-center'>
        <ErrorAlert>{pokemon.message}</ErrorAlert>
        <Link href='/'>Go to home page</Link>
      </div>
    );
  }

  return (
    <div className='container'>
      <PokemonDetails
        image={pokemon.sprites['front_default']}
        name={pokemon.name}
        id={pokemon.id}
        height={pokemon.height}
        weight={pokemon.weight}
        abilities={pokemon.abilities}
        stats={pokemon.stats}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const pokemon = await getPokemonById(id);

  return {
    props: {
      ok: pokemon.ok,
      pokemon: pokemon.data,
    },
  };
}

export default PokemonPage;
