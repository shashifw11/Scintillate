import { useEffect, useState } from 'react';

import axios from 'axios';
import { Container, Grid, Heading } from '@chakra-ui/react';
import CharacterCard from './components/CharacterCard';
import Pagination from './components/Pagination';

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?page=${page}`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [page]);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={8}>Star Wars Characters</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {characters.map(character => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </Grid>
      <Pagination page={page} setPage={setPage} />
    </Container>
  );
};

export default Main;
