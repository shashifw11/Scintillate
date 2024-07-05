"use client";

import React from 'react';
import { Box, Image, Text, Badge, VStack, HStack, Button } from '@chakra-ui/react';

const CharacterDetail = ({ character }) => { 
    console.log("CharacterDetail",character);

  return (
    <Box> 
    <VStack spacing={2} align="stretch">
      <Text fontWeight="bold" fontSize="xl" color="teal.500">
        {character.name}
      </Text>

      <HStack spacing={4}>
        <Badge colorScheme="blue">Height: {character.height} cm</Badge>
        <Badge colorScheme="purple">Mass: {character.mass} kg</Badge>
      </HStack>

      <HStack spacing={4}>
        <Badge colorScheme="yellow">Hair: {character.hair_color}</Badge>
        <Badge colorScheme="green">Skin: {character.skin_color}</Badge>
      </HStack>

      <HStack spacing={4}>
        <Badge colorScheme="orange">Eyes: {character.eye_color}</Badge>
        <Badge colorScheme="red">Birth: {character.birth_year}</Badge>
        <Badge colorScheme="pink">Gender: {character.gender}</Badge>
      </HStack>

      <Text mt={2} fontSize="sm">
        {/* Films: {character.filmTitles.join(', ')} */}
      </Text>
    </VStack>
  </Box>
  );
};

export default CharacterDetail;
