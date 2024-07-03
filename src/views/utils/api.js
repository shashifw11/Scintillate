
export const fetchCharacters = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await res.json();
  return data;
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}/`);
  const data = await res.json();
  return data;
};
  