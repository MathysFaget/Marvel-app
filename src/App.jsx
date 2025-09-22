import './App.css';
import CharactersList from './components/CharactersList';
import NumberOfCharacters from './components/NumberOfCharacters';
import characters from './data/characters.json';

function App() {
  return (
    <div>
      <NumberOfCharacters characters={characters} />
      <CharactersList />
    </div>
  );
}

export default App;
