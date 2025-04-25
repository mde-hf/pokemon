import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";

function PokemonDropdown({ onSelect, reset }) {

    const [selected, setSelected] = useState("")
    // const [pokemonOptions, setPokemonOptions] = useState([])
    const [randomOptions, setRandomOptions] = useState([])

    //To reset the dropdown
    useEffect(() => {
        if (reset) {
            setSelected("");
        }
    }, [reset]);

    //To get the list of pokemon names for dropwdown 
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((response) => response.data.results.map((pokemon) => pokemon.name))
            .then((data) => data.map((uppercase) => uppercase.toUpperCase()))
            .then((data) => {

                const randomTen = data
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 10);

                setRandomOptions(randomTen);
            });
    }, []);


    return (
        <select value={selected} onChange={(e) => {
            setSelected(e.target.value);
            onSelect(e.target.value);
        }}>
            <option value="" disabled>Select Pokemon</option>

            {randomOptions.map((name) => (
                <option key={name} value={name}>
                    {name}
                </option>
            ))}
        </select>



    )
}


export default PokemonDropdown