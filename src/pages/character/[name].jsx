import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Image, Center, Text, VStack } from '@chakra-ui/react';
import CharacterDetail from '../../views/components/CharacterDetail';
import { fetchCharacter } from '../../views/utils/api';

const CharacterPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCharacterFilms = async (filmUrls) => {
    try {
      const filmPromises = filmUrls.map((url) =>
        fetch(url).then((response) => response.json())
      );
      const films = await Promise.all(filmPromises);
      return films.map((film) => film.title);
    } catch (error) {
      console.error('Error fetching films:', error);
      return [];
    }
  };

  const getCharacterData = async (name) => {
    try {
      const data = await fetchCharacter(name);
      const filmTitles = await getCharacterFilms(data.films);
      setCharacter({ ...data, filmTitles });
    } catch (error) {
      console.error('Error fetching character:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name) {
      getCharacterData(name);
    }
  }, [name]);

  if (loading) {
    return (
      <Center height="100vh">
        <p style={{ fontSize: '40px' }}>...Loading</p>
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
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
        m={[2, 3]}
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
