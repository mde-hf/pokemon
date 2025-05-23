import SearchBar from "../components/SearchBar";
import getPokemon from "../api/pokemonApi";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import PokemonCard from "../components/PokemonCard";


function HomePage() {
    const [pokemonName, setPokemonName] = useState(""); // stores the search term from the search bar
    const [pokemonData, setPokemonData] = useState(null); // Stores Pokemon data
    const [error, setError] = useState(null); // to store errors if pokemon is not found
    const [isLoading, setIsLoading] = useState(false); // Shows loading state


    const handleSearch = async () => {

        setIsLoading(true);
        setError(null);

        try {
            const data = await getPokemon(pokemonName)
            setPokemonData(data);
        }

        catch (error) {

            setError("Pokemon not found")
            setPokemonData(null);
        } finally {

            setIsLoading(false);
        }
    }

    const getRandomPokemon = async () => {
        setIsLoading(true);
        setError(null);
        try {

            const randomID = Math.floor(Math.random() * 1017) + 1;
            const data = await getPokemon(randomID)
            setPokemonData(data);
            setPokemonName('');

        } catch (error) {
            setError("Couldn't load random Pokémon.");
            setPokemonData(null);
        } finally {
            setIsLoading(false);
        }
    };



    return (

        <div>

            <div className="min-h-screen flex flex-col">

                {/* Top Half: Background Image */}
                <div
                    className="h-[50vh] w-[120vh] bg-cover bg-center"
                    style={{ backgroundImage: "url('/background.png')" }}
                ></div>
                <SearchBar
                    pokemonName={pokemonName}
                    setPokemonName={setPokemonName}
                    handleSearch={handleSearch}
                    getRandomPokemon={getRandomPokemon}
                />
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <PokemonCard data={pokemonData} />

            </div>
        </div>




    );

}





export default HomePage;