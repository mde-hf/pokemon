
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
                onKeyDown={(e) => {       // code to start the serach on pressing Enter key
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                className="border p-2 rounded w-60 border-red-500"

            />
            <button
                onClick={handleSearch}
                disabled={!pokemonName.trim()}
            >

                Search
            </button>

        </div >

    )


}

export default SearchBar;
