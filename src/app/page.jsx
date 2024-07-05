"use client";
import React, { useEffect, useState } from "react";
import CharacterCard from "../views/components/CharacterCard";
import Header from "../views/components/Header";
import Pagination from "../views/components/Pagination";
import { fetchCharacters } from "../views/utils/api";
import { useLocalStorage } from "../views/hooks/useLocalStorage";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  margin: "20px 0",
};

const Page = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); 

  //  console.log("characters",characters);  

  const getCharacterFilms = async (filmUrls) => {
    try {
      const filmPromises = filmUrls.map((url) =>
        fetch(url).then((response) => response.json())
      );
      const films = await Promise.all(filmPromises);
      return films.map((film) => film.title);
    } catch (error) {
      console.error("Error fetching films:", error);
      return [];
    }
  };

  const getCharacters = async (page) => {
    try {
      const data = await fetchCharacters(page);
      const charactersWithFilms = await Promise.all(
        data.results.map(async (character) => {
          const filmTitles = await getCharacterFilms(character.films);
          return { ...character, filmTitles };
        })
      );
      return charactersWithFilms;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  };

  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const charactersWithFilms = await getCharacters(currentPage);
        setCharacters(charactersWithFilms);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [currentPage]);

  

  const handleFavorite = (character) => {
    if (favorites.includes(character.name)) {
      setFavorites(favorites.filter((fav) => fav !== character.name));
    } else {
      setFavorites([...favorites, character.name]);
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Header />
      <div style={styles} className="character-list">
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            isFavorite={favorites.includes(character.name)}
            onFavorite={handleFavorite}
          />
        ))}
      </div>
      <div style = {{textAlign:"end" , marginRight:"10px"}}>
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default Page;
