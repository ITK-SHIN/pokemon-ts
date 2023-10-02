import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import { PokemonListReponseType, fetchPokemons } from '../Service/pokemonService';

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListReponseType>({
    count: 0,
    next: '',
    results: [],
  });

  useEffect(() => {
    (async () => {
      const pokemonAll = await fetchPokemons();
      setPokemons(pokemonAll);
    })();
  }, []);

  return (
    <List>
      {pokemons.results.map((pokemon, index) => (
        <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
export default PokeCardList;
