import styled from '@emotion/styled';
import PokeCard from './PokeCard';

const PokeCardList = () => (
  <List>
    {Array.from({ length: 10 }).map((_, index) => (
      <PokeCard key={index} />
    ))}
  </List>
);

const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
export default PokeCardList;
