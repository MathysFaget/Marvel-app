import characters from '../data/characters.json';

function CharactersList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(character => (
          <tr key={character.id}>
            <td>{character.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CharactersList;