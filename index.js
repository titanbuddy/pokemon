const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    text: 'pokemon'
}
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', () => {
    let value = document.getElementById('search').value; 
    const apiUrl = `${apiData.url}${apiData.text}/${value}`;
    fetch(apiUrl)
    .then((data) => data.json())
    .then( (pokemon) => generateHtml(pokemon));
    const generateHtml = (data) => {
        console.log(data);
        console.log(data.types[0].type.name,data.types[1].type.name);
        const html = `
            <div class="name">${data.name}</div>
            <img src="${data.sprites.front_default}" alt="">
            <div class="type">${data.types[0].type.name}</div>
            <div class="type">${data.types[1].type.name}</div>
            `
        const pokemonDiv = document.querySelector('.pokemon');
        pokemonDiv.innerHTML = html;
        
    }
});
