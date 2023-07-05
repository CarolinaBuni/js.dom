const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";


const searchInput = document.querySelector('#pokemon-search')
const searchButton = document.querySelector('#search-button')
const pokemonContainer = document.querySelector('.pokemon-container')
let currentPokemonId = 1;
let currentPokemon;

const getPokemonTemplate = () => {
  return `
        <div class="pokemon">
        <h3>${currentPokemon.name}</h3>
        <span>ID: ${currentPokemon.id}</span>
        <img src="${currentPokemon.image}" alt="${currentPokemon.name}"/>
        </div>
    `;
};

const renderPokemon = () => {
    const template = getPokemonTemplate()
    pokemonContainer.innerHTML += template;
}


const fetchPokemon = () => {
    fetch(`${POKEMON_URL}${currentPokemonId}`)
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
        currentPokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default,
        };

        renderPokemon();
    });
};

const handleSearch = () => {
    const inputValue = searchInput.valueAsNumber;
    currentPokemonId = inputValue;
    fetchPokemon();
};

searchInput.value = currentPokemonId;
fetchPokemon();
searchButton.addEventListener('click', handleSearch)
