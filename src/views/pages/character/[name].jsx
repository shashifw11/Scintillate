import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Image, Spinner, Center, Text, VStack } from '@chakra-ui/react';
import CharacterDetail from '../../views/components/CharacterDetail';
import { fetchCharacter } from '../../views/utils/api';

const CharacterPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterData = async () => {
      setLoading(true);
      try {
        const data = await fetchCharacter(name);
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchCharacterData();
    }
  }, [name]);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!character) {
    return (
      <Center height="100vh">
        <Text>Character not found.</Text>
      </Center>
    );
  }

  return (
    <Center height="100vh">
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
        p="6"
      >
        <VStack spacing={4}>
          <Image
            src={`https://starwars-visualguide.com/assets/img/characters/${character.url.match(/\/(\d+)\//)[1]}.jpg`}
            alt={character.name}
            borderRadius="lg"
          />
          <CharacterDetail character={character} />
        </VStack>
      </Box>
    </Center>
  );
};

export default CharacterPage;
