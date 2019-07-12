//wvc - toggle views in screen between list and poke-info
let listButton = document.getElementById('list-button');
listButton.addEventListener("click", function() {
  document.getElementById('poke-info').classList.toggle('hidden');
  document.getElementById('poke-list').classList.toggle('hidden');



//When item on list is clicked - hide list
let listClick = document.querySelectorAll('li');
for(i = 0; i <= listClick.length; ++i) {
  listClick[i].addEventListener("click", function()
  {
    document.getElementById('poke-info').classList.toggle('hidden');
    document.getElementById('poke-list').classList.toggle('hidden');
  })
};

});




function DoThingsWithTheDom() {
        /*
        Write your code here!
        The following variables contain data for you to use. Be careful with the data types (some are numbers, some are strings and some are arrays)!
            pokemon_name
            pokemon_id
            pokemon_moves
            pokemon_abilities
            pokemon_image
            pokemon_weight

        The goal of the exercise is for you to display this information in your HTML.
        You can do this by placing empty tags in your HTML, and the assigning their content with JS.
        But you can also generate the HTML with document.createElement().
        */

        //list with all pokemons
        list.innerHTML = LoadPokemonList();


        //adds the pokemon image to the image container
        let pokeImg = document.getElementById('poke-img'); //img-tag
        pokeImg.src = pokemon_image;

        //Pokemon id - sets the correct id
        pokeId = document.getElementById('poke-id');
        pokeId.innerHTML = pokemon_id;


        // Select the info-screen, add the pokemen-info to screen
        let pokeInfo = document.getElementById('poke-info'); //screen

        //Pokemon name - Create div if doesn't excist - else change content
        let pokeName;
        if (document.getElementById('pokeName') == undefined) {
          pokeName = document.createElement('p');
          pokeName.setAttribute('id', 'pokeName');
          pokeName.innerHTML = '<strong>name: </strong>' + `<span>${pokemon_name}</span>`;
          pokeInfo.append(pokeName);
        } else {
          pokeName = document.querySelector('#pokeName span')
          pokeName.innerHTML = pokemon_name;
        };

        //pokemon pokemon_weight
        let pokeWeight;
        if (document.getElementById('pokeWeight') == undefined) {
          pokeWeight = document.createElement('p');
          pokeWeight.setAttribute('id', 'pokeWeight');
          pokeWeight.innerHTML = '<strong>weight: </strong>' + `<span>${pokemon_weight} kg</span>`;
          pokeInfo.append(pokeWeight);
        } else {
          pokeWeight = document.querySelector('#pokeWeight span')
          pokeWeight.innerHTML = pokemon_weight;
        };

        //pokemon pokemon_abilities
        let pokeAbilities;
        if (document.getElementById('pokeAbilities') == undefined) {
          pokeAbilities = document.createElement('p');
          pokeAbilities.setAttribute('id', 'pokeAbilities');
          pokeAbilities.innerHTML = '<strong>abilities: </strong>' + `<span>${pokemon_abilities}</span>`;
          pokeInfo.append(pokeAbilities);
        } else {
          pokeAbilities = document.querySelector('#pokeAbilities span')
          pokeAbilities.innerHTML = pokemon_abilities;
        };

        //pokemon pokemon_moves
        let pokeMoves;
        if (document.getElementById('pokeMoves') == undefined) {
          pokeMoves = document.createElement('p');
          pokeMoves.setAttribute('id', 'pokeMoves');
          pokeMoves.innerHTML = '<strong>moves: </strong>' + `<span>${pokemon_moves}</span>`;
          pokeInfo.append(pokeMoves);
        } else {
          pokeMoves = document.querySelector('#pokeMoves span')
          pokeMoves.innerHTML = pokemon_moves;
        };

        LogPokeData();






    }

//loads the image of placeholder-pokemon as a standard
function startScreen() {
  if (poke_search.value == ''){
    LoadPokemon(poke_search.placeholder);
  };
}

startScreen();
