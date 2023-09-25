import { Routes, Route } from 'react-router';
import PokemonDetail from './Detail/PokemonDetail';
import PokeCardList from './List/PokeCardList';

const PageNavigator = () => (
  <Routes>
    <Route path="/" element={<PokeCardList />} />
    <Route path="/pokemon/:name" element={<PokemonDetail />} />
  </Routes>
);

export default PageNavigator;
