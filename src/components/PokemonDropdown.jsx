import React, { useState, useEffect } from "react";

function PokemonDropdown({ onSelect, reset }) {

    const [selected, setSelected] = useState("")

    useEffect(() => {
        if (reset) {
            setSelected("");
        }
    }, [reset]);

    return (
        <select value={selected} onChange={(e) => {
            setSelected(e.target.value);
            onSelect(e.target.value);
        }}>
            <option value="" disabled>Select Pokemon</option>
            <option value="Pikachu">Pikachu</option>
            <option value="Charmander">Charmander</option>
            <option value="Arcanine">Arcanine</option>
        </select>



    )
}


export default PokemonDropdown