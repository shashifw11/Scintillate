"use client";

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CharacterDetail = ({ character }) => {
  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold">{character.name}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Birth Year: {character.birth_year}</Text>
      <Text>Height: {character.height}cm</Text>
      <Text>Mass: {character.mass}kg</Text>
      <Text>Hair Color: {character.hair_color}</Text>
      <Text>Skin Color: {character.skin_color}</Text>
    </Box>
  );
};

export default CharacterDetail;
