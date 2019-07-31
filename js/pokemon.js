/*==================================================================================================
======================================== Magic Happens Here! =======================================
==================================================================================================*/



//Variables are declared.

let base_url = "https://pokeapi.co/api/v2/";

let poke_search = document.getElementById("pokesearch"); //input-field
let search = document.getElementById("search"); //button
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let list = document.getElementById("list");

//wvc - Create an object for the pokemon information
let pokeObject = {
  //object gets filled with function SetVariables
};

//EventListeners are added to HTML elements.

// selects the value from the search-input-field when clicked
search.addEventListener("click", function() {
    LoadPokemon(poke_search.value);
});

// when ENTER is pushed the value from the input-field is selected
poke_search.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        LoadPokemon(poke_search.value);
    }
});

// selects previous pokemon when clicked
previous.addEventListener("click", function() {
    if (pokeObject.id === undefined) {
        pokeObject.id = 2;
    }
    LoadPokemon(--pokeObject.id);
});

// selects next pokemon when clicked
next.addEventListener("click", function() {
    if (pokeObject.id === undefined) {
        pokeObject.id = 0;
    }
    LoadPokemon(++pokeObject.id);
});

//Function that looks up the data for a pokemon when it's given the pokemon's name or id number.

function LoadPokemon(pokemon){
    let request = new XMLHttpRequest();
    let dots = 1;

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status == 200 && pokemon !== "") {
            SetVariables(JSON.parse(this.responseText));
        }
        else {
            SetVariables(dots++);
        }
    }

    request.open("GET", base_url + "pokemon/" + pokemon.toString().toLowerCase(), true);
    request.send();
}


//This function changes the variables with the most recent pokemon's information.

function SetVariables(data){
    if(typeof data === "number") {
        console.log("Searching for data" + ".".repeat(data))
    }

    else {
        console.log("Data found!")
        pokeObject.name = data.name;
        pokeObject.id = data.id;
        pokeObject.moves = data.moves.map(x => x.move.name);
        pokeObject.abilities = data.abilities.map(x => x.ability.name);
        pokeObject.image = data.sprites.front_default;
        pokeObject.weight = data.weight;
        pokeObject.pokeMoves;


        pokeObject.randomMoves = function() {

          let i = Math.floor((Math.random() * pokeObject.moves.length) + 1);
          let j = Math.floor((Math.random() * pokeObject.moves.length) + 1);

          return pokeObject.pokeMoves = [pokeObject.moves[i], pokeObject.moves[j]];

          if (pokeObject.moves[i] === pokeObject.moves[j]) {
            j = Math.floor((Math.random() * pokeObject.moves.length) + 1);
            return pokeObject.pokeMoves = [pokeObject.moves[i], pokeObject.moves[j]]
          };

        }

        pokeObject.randomMoves();
        console.log(pokeObject.pokeMoves);

        DoThingsWithTheDom();
    }
}



//This function loads all of the pokemons and stores them in a list in your HTML.
//Clicking one of the list items will then look up data for that specific pokemon!

function LoadPokemonList() {
    let request = new XMLHttpRequest();
    list.innerHTML = "";

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status == 200) {
            let pokemon_list = JSON.parse(this.responseText).results.map(x => x.name);
            for (pokemon of pokemon_list) {
                let li = document.createElement("li");
                li.innerHTML = pokemon;
                li.addEventListener("click", function() {
                    LoadPokemon(this.innerHTML);
                })
                list.append(li);
            }
        }
    }

    request.open("GET", base_url + "pokemon?offset=0&limit=807", true);
    request.send();
}



//Function that you can call to see the current pokemon's information

// function LogPokeData() {
//     console.log("Name: " + pokemon_name
//     + "\n" + "ID: " + pokemon_id
//     + "\n" + "Moves:", pokemon_moves
//     , "\n" + "Abilities:", pokemon_abilities
//     , "\n" + "Image URL: " + pokemon_image
//     + "\n" + "Weight: " + pokemon_weight);
// }

/*==================================================================================================
======================================== Magic Ends Here! ==========================================
==================================================================================================*/
