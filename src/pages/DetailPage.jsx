import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import getPokemon from "../api/pokemonApi";
import { data } from "autoprefixer";

function DetailPage() {


    const [pokemonName, setPokemonName] = useState("")

    const [pokemonData, setPokemonData] = useState([])

    async function handleSearch() {

        const result = await getPokemon(pokemonName)
        if (!result) {
            console.log("Pokemon not found")
        } else {
            setPokemonData(result)

        }
    }



    const getRandomPokemon = () => { }

    return (

        <div>

            <h1>Search Pokemon Details</h1>
            <SearchBar
                pokemonName={pokemonName}
                setPokemonName={setPokemonName}
                handleSearch={handleSearch}
                getRandomPokemon={getRandomPokemon}
            />

        </div >
    )
}

export default DetailPage