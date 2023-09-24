import styled from '@emotion/styled';
import React from 'react';
import PokeCard from './PokeCard';

const PokeCardList = () => (
  <List>
    {Array.from({ length: 10 }).map((_, index) => (
      <PokeCard key={index} />
    ))}
  </List>
);

const List = styled.ul``;

export default PokeCardList;
