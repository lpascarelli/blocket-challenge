import Head from 'next/head';
import { useState } from 'react';

import Input from '../components/ui/input';
import ErrorAlert from '../components/ui/error-alert';
import Pokemons from '../components/pokemons/pokemons';
import { getPokemons } from '../api-utils';

function HomePage(props) {
  if (!props.ok) {
    return <ErrorAlert>{props.pokemons.message}</ErrorAlert>;
  }

  const [pokemons, setPokemons] = useState(props.pokemons.results);

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

  return (
    <div className='container'>
      <Head>
        <title>PokeDex - challenge</title>
      </Head>
      <Input
        onPokemonNameChange={filterByPokemonNameHandler}
        type='text'
        placeholder='Search your pokemon'
      />
      <Pokemons pokemons={pokemons} />
    </div>
  );
}

export async function getStaticProps() {
  const pokemons = await getPokemons();

  return {
    props: {
      ok: pokemons.ok,
      pokemons: pokemons.data,
    },
  };
}

export default HomePage;
