import React from "react";

function PokemonDropdown({ onSelect }) {

    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="" disabled selected>Select Pokemon</option>
            <option value="Pikachu">Pikachu</option>
            <option value="Charmander">Charmander</option>
            <option value="Arcanine">Arcanine</option>
        </select>

    )
}


export default PokemonDropdown