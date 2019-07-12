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

        //adds the pokemon image to the image container
        let pokeImg = document.getElementById('poke-img'); //img-tag
        pokeImg.src = pokemon_image;

        // Select the info-screen, add the pokemen-info to screen
        let pokeInfo = document.getElementById('poke-info'); //screen

        //Pokemon name
        let pokeName = document.createElement('p');
        pokeName.classList.add('pokeName');
        pokeName.innerHTML = '<strong>name: </strong>' + pokemon_name;
        pokeInfo.append(pokeName);




    }

//loads the image of placeholder-pokemon as a standard
function startScreen() {
  if (poke_search.value == ''){
    LoadPokemon(poke_search.placeholder);
  };
}

startScreen();
