import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import getPokemon from "../api/pokemonApi";

function DetailPage() {
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonData, setPokemonData] = useState([])
    const [selectDetails, setSelectDetails] = useState({
        abilities: false,
        weight: false,
        moves: false
    })

    async function handleSearch() {
        const result = await getPokemon(pokemonName)
        if (!result) {
            console.log("Pokemon not found")
        } else {
            setPokemonData(result)
        }
    }

    function handleCheckboxChange(e) {
        const { name, checked } = e.target;

        setSelectDetails(prev => ({
            ...prev,
            [name]: checked
        }));
    }

    const getRandomPokemon = () => { }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Search Pokemon Details</h1>
            <SearchBar
                pokemonName={pokemonName}
                setPokemonName={setPokemonName}
                handleSearch={handleSearch}
                getRandomPokemon={getRandomPokemon}
            />

            <div className="mt-4">
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                    <legend className="fieldset-legend text-center px-2 font-medium">Pokemon Details</legend>
                    <label className="label">
                        <input type="checkbox"
                            className="checkbox"
                            name="abilities"
                            checked={selectDetails.abilities}
                            onChange={handleCheckboxChange} />
                        Abilities
                    </label>
                    <label className="label">
                        <input type="checkbox"
                            className="checkbox"
                            name="weight"
                            checked={selectDetails.weight}
                            onChange={handleCheckboxChange} />
                        Weight
                    </label>
                    <label className="label">
                        <input type="checkbox"
                            className="checkbox"
                            name="moves"
                            checked={selectDetails.moves}
                            onChange={handleCheckboxChange}
                        />
                        Moves
                    </label>
                </fieldset>
            </div>
            {pokemonData && pokemonData?.abilities && (
                <div className="mt-4 w-64">
                    <h2 className="text-xl font-semibold text-center">Selected Pokémon Details</h2>

                    {selectDetails.abilities && (
                        <div className="mt-2">
                            <h3 className="font-medium">Abilities:</h3>
                            <ul className="list-disc pl-5">
                                {pokemonData.abilities.map((item, index) => (
                                    <li key={index}>{item.ability.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectDetails.moves && pokemonData?.moves && (
                        <div className="mt-2">
                            <h3 className="font-medium">Moves:</h3>
                            <ul className="list-disc pl-5">
                                {pokemonData.moves.slice(0, 5).map((item, index) => (
                                    <li key={index}>{item.move.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectDetails.weight && pokemonData?.weight && (
                        <div className="mt-2">
                            <h3 className="font-medium">Weight:</h3>
                            <p>{pokemonData.weight}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default DetailPage