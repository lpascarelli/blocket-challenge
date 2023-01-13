import { getPokemonById } from '../../api-utils';

function PokemonPage(props) {
  console.log(props.pokemon);
  return <div>Pokemon Page</div>;
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
