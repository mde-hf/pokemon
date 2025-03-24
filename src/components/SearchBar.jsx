
import React from "react";

import { useState } from "react";


function SearchBar({ pokemonName, setPokemonName, handleSearch }) {

    return (
        <div className="flex gap-2 items-center justify-center p-4">
            <input
                type="text"
                placeholder="Search Pokémon..."
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                className="border p-2 rounded w-60 border-red-500"

            />
            <button
                onClick={handleSearch}
            >
                Search Pokemon
            </button>

        </div >

    )


}

export default SearchBar;
