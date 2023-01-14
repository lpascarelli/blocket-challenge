import PokemonDetails from '../../components/pokemon-details/pokemon-details';
import { getPokemonById } from '../../api-utils';

function PokemonPage(props) {
  const { pokemon } = props;
  console.log(props.pokemon);
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
      pokemon,
    },
  };
}

export default PokemonPage;
