import Head from 'next/head';

import Input from '../components/ui/input';
import Pokemons from '../components/pokemons/pokemons';
import { getPokemons } from '../api-utils';

function HomePage(props) {
  return (
    <div className='container'>
      <Head>
        <title>PokeDex - Blocket challenge</title>
      </Head>
      <Input />
      <Pokemons pokemons={props.pokemons.results} />
    </div>
  );
}

export async function getStaticProps() {
  const pokemons = await getPokemons();

  return {
    props: {
      pokemons,
    },
  };
}

export default HomePage;
