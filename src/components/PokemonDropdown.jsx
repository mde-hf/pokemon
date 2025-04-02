import React from "react";

function PokemonDropdown({ onSelect }) {

    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="Pikachu">Pikachu</option>
            <option value="Charmander">Charmander</option>
        </select>

    )
}


export default PokemonDropdown