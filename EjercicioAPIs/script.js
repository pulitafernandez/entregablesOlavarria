fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
.then(resp => resp.json())
.then(data => {
  data.results.forEach(pokemon => {
    const card= document.createElement('div');
    card.classList.add('card');
    card.innerHTML += `<h3> Nombre: ${pokemon.name} </h3>
                      <h3> Url: ${pokemon.url} </h3>`
   
    contenedor.appendChild(card);
  })
})
.catch(err => console.log(err));
