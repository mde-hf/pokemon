import React, { useEffect, useState } from "react";
import getPokemon from "../api/pokemonApi";
import PokemonCard from "../components/PokemonCard";



function About() {

    const [thirtyPokemon, setThirtyPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [shouldFetch, setShouldFetch] = useState(false)


    useEffect(() => {
        if (!shouldFetch) return;

        const fetchBulkPokemons = async () => {

            setIsLoading(true);
            let pokemonList = []
            for (let i = 0; i < 20; i++) {

                const randomID = Math.floor(Math.random() * 1017) + 1;
                const pokemon = await getPokemon(randomID)
                pokemonList.push(pokemon);
            }

            setThirtyPokemon(pokemonList);
            setIsLoading(false);
            setShouldFetch(false);

        }
        fetchBulkPokemons();

    }, [shouldFetch])



    return (
        <div>


            <button onClick={() => setShouldFetch(true)}> Click to fetch pokemon </button>

            {isLoading ? (
                <h1>Loading is in progress</h1>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {thirtyPokemon.map(pokemon => (
                        <PokemonCard key={pokemon.id} data={pokemon} />

                    ))}
                </div>
            )}
        </div>
    );
}

export default About;