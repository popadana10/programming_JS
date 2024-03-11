const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((json) => displayData(json));
  };
  
  fetchData();
  
const displayData = (data) => {
    const container = document.querySelector('#pokeContainer');
  
    data.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      `;
      container.appendChild(postElement);
    });
  };
