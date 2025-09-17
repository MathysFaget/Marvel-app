console.log('Welcome to Marvel App');

const getCharacters = () => {
    const api_url = 'http://localhost:3000/data/characters.json';
return fetch(api_url)
    .then(response => response.json())
};

const characters =getCharacters().then(characters => {
    const charactersList = document.getElementById('characters');
    charactersList.innerHTML = '';
    characters.forEach(character => {
        const characterElement = document.createElement('li');
        characterElement.textContent = character.name;
        charactersList.appendChild(characterElement);
    });
});