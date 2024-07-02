"use client";

import React, { useEffect, useState } from "react";
import CharacterCard from '../views/components/CharacterCard';
import Header from '../views/components/Header';
import Pagination from '../views/components/Pagination';
import { fetchCharacters } from '../views/utils/api';
import { useLocalStorage } from '../views/hooks/useLocalStorage';

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  margin: '20px 0'
};



const Page = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters(currentPage);
      setCharacters(data.results);
    };

    getCharacters();
  }, [currentPage]);

  const handleFavorite = (character) => {
    if (favorites.includes(character.name)) {
      setFavorites(favorites.filter((fav) => fav !== character.name));
    } else {
      setFavorites([...favorites, character.name]);
    }
  };

  return (
    <div>
      <Header />
      <div style={styles} className="character-list" >
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            isFavorite={favorites.includes(character.name)}
            onFavorite={handleFavorite}
          />
        ))}
      </div>
     
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
    </div>
  );
};

export default Page;
