async function getbio(){

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
        const data = await response.json();
      
        console.log(data);
      
        const cardText = document.querySelectorAll('.card-text');
        const cardLink = document.querySelectorAll('.btn-primary');
      
        data.results.forEach((pokemon, index) => {
          const cardTextElement = cardText[index];
          const cardLinkElement = cardLink[index];
          cardTextElement.textContent = pokemon.name;
          cardLinkElement.href = pokemon.url;
        });
      } catch (error) {
        console.error(error);
      }
}
getbio();