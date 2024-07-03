// CharacterCard.jsx

import React from 'react';
import { Box, Image, Text, Badge, VStack, HStack, Button } from '@chakra-ui/react';

const CharacterCard = ({ character, isFavorite, onFavorite }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
      transition="all 0.2s"
    >
      <Image src={`https://starwars-visualguide.com/assets/img/characters/${character.url.match(/\/(\d+)\//)[1]}.jpg`} alt={character.name} borderRadius="lg" />

      <Box p="6">
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
            Films: {character.filmTitles.join(', ')}
          </Text>

          <Button
            mt={4}
            colorScheme={isFavorite ? 'red' : 'teal'}
            onClick={() => onFavorite(character)}
          >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default CharacterCard;

