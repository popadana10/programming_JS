let pokemons = [];

const fetchData = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
    .then((response) => response.json())
    .then((json) => {
      pokemons = json.results;
      displayData(pokemons);
    });
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector('.data');
  container.innerHTML = '';

  data.forEach((pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.innerHTML = `<h2>${pokemon.name}</h2>`;
    container.appendChild(pokemonCard);
  });
};

//delaying the typing
const debounce = (func, delay) => {
    let debounceTimer;
return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
};

};

/* 
const searchInput = document.querySelector('#search');

const searchFoxes = (e) => {
  console.log(e.target.value);
};

searchInput.addEventListener('input', searchFoxes); */

// connecting the debounce with the searchInput
const searchPokemons = debounce((searchInput) => {
  const filteredData = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  displayData(filteredData);
}, 300);

document.querySelector('#search').addEventListener('input', (e) => {
  searchPokemons(e.target.value);
});