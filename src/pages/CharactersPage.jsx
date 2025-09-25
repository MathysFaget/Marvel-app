import { useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import NumberOfCharacters from '../components/NumberOfCharacters';
import characters from '../data/characters.json';

function CharactersPage() {
  useEffect(() => {
    document.title = "Characters - Marvel App";
  }, []);

  return (
    <div>
      <h1>Marvel Characters</h1>
      <NumberOfCharacters characters={characters} />
      <CharactersList />
    </div>
  );
}

export default CharactersPage;