import axios from "axios";

function getPokemon(pokemonName) {
    if (!pokemonName) {
        console.error("No Pokémon name provided!");
        return Promise.reject("No Pokémon name provided!");
    }

    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching Pokémon:", error);
            return null;
        });
}


export default getPokemon;
