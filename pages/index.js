import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Input from '../components/ui/input';
import Pokemons from '../components/pokemons/pokemons';
import { getPokemons } from '../api-utils';

function HomePage(props) {
  const [pokemons, setPokemons] = useState(props.pokemons.results);
  const router = useRouter();

  function filterByPokemonNameHandler(event) {
    const input = event.target.value;
    const allPokemons = props.pokemons.results;

    if (!input) {
      setPokemons(allPokemons);
    } else {
      const filteredPokemons = allPokemons.filter((pokemon) => {
        if (pokemon.name.includes(input)) {
          return pokemon;
        }
      });

      setPokemons(filteredPokemons);
    }
  }

  function findPokemonDetailsHandler(id) {
    router.push(`/pokemon/${id}`);
  }

  return (
    <div className='container'>
      <Head>
        <title>PokeDex - Blocket challenge</title>
      </Head>
      <Input onPokemonNameChange={filterByPokemonNameHandler} />
      <Pokemons
        pokemons={pokemons}
        onPokemonDetails={findPokemonDetailsHandler}
      />
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
