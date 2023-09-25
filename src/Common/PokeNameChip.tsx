import styled from '@emotion/styled';
import React from 'react';

const PokeNameChip = () => (
  <Chip>
    <NumberChip>
      <Number>001</Number>
    </NumberChip>
    <Text>피카츄</Text>
  </Chip>
);

const Chip = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #c0c0c0;
  border-radius: 16px;

  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;

const NumberChip = styled.label`
  padding: 4px 6px;
  background-color: yellow;
  border-radius: 16px;
  opacity: 0.8;
`;

const Number = styled.label`
  opacity: 1;
`;

const Text = styled.label`
  margin: 0 8px 0 5px;
`;

export default PokeNameChip;
