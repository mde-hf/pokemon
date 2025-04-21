// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useContext } from "react";
import { BattleContext, BattleProvider } from "../context/BattleContext";
import getPokemon from "../api/pokemonApi";
import PokemonDropdown from "../components/PokemonDropdown";
import Header from "../components/Header";



function BattlePage() {
    const { pokemon1,
        pokemon2,
        setPokemon1,
        setPokemon2,
        battleResult,
        simulateBattle } = useContext(BattleContext);

    // useEffect(() => {
    //     const load = async () => {
    //         const p1 = await getPokemon(pokemon1);
    //         const p2 = await getPokemon(pokemon2);
    //         setPokemon1(p1);
    //         setPokemon2(p2);
    //     };

    //     load();
    // }, []);


    return (

        <div>
            <Header />


            {/* Player sections */}
            <div className="flex justify-center gap-8 mt-10">
                {/* Player 1 */}
                <div className="w-1/2">
                    <h2 className="text-xl font-bold whitespace-nowrap">Player 1</h2>
                    <PokemonDropdown onSelect={async (name) => {
                        const data = await getPokemon(name);
                        setPokemon1(data)
                    }} />
                </div>

                {/* Player 2 */}
                <div className="w-1/2">
                    <h2 className="text-xl font-bold whitespace-nowrap">Player 2</h2>
                    <PokemonDropdown onSelect={async (name) => {
                        const data = await getPokemon(name);
                        setPokemon2(data)
                    }} />

                </div>

            </div>
            <div className="p-6 text-center">
                <button onClick={simulateBattle} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Start Battle
                </button>
                {battleResult && (
                    <p className="mt-4 text-lg font-semibold text-green-600">
                        {battleResult}
                    </p>
                )}
            </div>

        </div>
    );



}



export default BattlePage;