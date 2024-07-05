import React from 'react';
import { Box, Image, Text, Badge, VStack, HStack, Button } from '@chakra-ui/react';
import CharacterDetail from "./CharacterDetail"
import Link from "next/link";

const CharacterCard = ({ character, isFavorite, onFavorite }) => { 
   
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    onFavorite(character);

  };
  console.log("characters",character);

  return ( 
    <Link href={`/character/${encodeURIComponent(character.name)}`}>
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
      transition="all 0.2s"
      m={[2, 3]}
    >
      <Image src={`https://starwars-visualguide.com/assets/img/characters/${character.url.match(/\/(\d+)\//)[1]}.jpg`} alt={character.name} borderRadius="lg" />
      <Box p="6">
        <Box p="6">
        <VStack spacing={2} align="stretch" >
          <CharacterDetail character={character} />

          <Button
            mt={4}
            colorScheme={isFavorite ? 'red' : 'teal'}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
           
          </Button>
        </VStack>
      </Box>
      </Box>
    </Box>
    </Link>
  );
};

export default CharacterCard;

