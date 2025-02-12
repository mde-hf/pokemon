

import { useState } from "react";


function SearchBar() {
    const [pokemonName, setPokemonName] = useState(" ")

    return (
        <div className="flex gap-2 items-center justify-center p-4">
            <input
                type="text"
                placeholder="Search Pokémon..."
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                className="border p-2 rounded w-60 border-purple-500"
            />
            <button className="bg-blue-500 text-white p-2 rounded"
                onClick={() => console.log(pokemonName)}
            >
                Search
            </button>
        </div >
    )

}

export default SearchBar;
