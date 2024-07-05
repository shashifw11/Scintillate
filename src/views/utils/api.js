export const fetchCharacters = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await res.json();
  return data;
};

export const fetchCharacter = async (name) => {
  const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
  const data = await res.json();
  if (data.results.length > 0) {
    return data.results[0];
  } else {
    throw new Error('Character not found');
  }
};


