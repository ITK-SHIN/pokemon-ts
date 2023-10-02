import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import { PokemonListReponseType, fetchPokemons } from '../Service/pokemonService';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListReponseType>({
    count: 0,
    next: '',
    results: [],
  });

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== '',
    onLoadMore: async () => {
      const morePokemons = await fetchPokemons(pokemons.next);

      setPokemons({
        ...morePokemons,
        results: [...pokemons.results, ...morePokemons.results],
      });
    },

    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(() => {
    (async () => {
      const pokemonAll = await fetchPokemons();
      setPokemons(pokemonAll);
    })();
  }, []);

  return (
    <>
      <List>
        {pokemons.results.map((pokemon, index) => (
          <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
        ))}
      </List>
      <Loading ref={infiniteRef}>Loading...</Loading>
    </>
  );
};

const Loading = styled.div`
  display: flex;
  justify-content: center;
`;

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
