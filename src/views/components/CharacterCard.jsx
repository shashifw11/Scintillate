"use client";

import React from 'react';
import { Box, Image, Badge, Button } from '@chakra-ui/react';

const CharacterCard = ({ character, isFavorite, onFavorite }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
      <Image src={`https://starwars-visualguide.com/assets/img/characters/${character.url.match(/\/(\d+)\//)[1]}.jpg`} alt={character.name} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {character.gender}
          </Badge>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {character.name}
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          <Button onClick={() => onFavorite(character)}>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterCard;
