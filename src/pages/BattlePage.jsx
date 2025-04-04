import React, { useEffect } from "react";
import { useContext, useState } from "react";
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

    useEffect(() => {
        const load = async () => {
            const p1 = await getPokemon("pikachu");
            const p2 = await getPokemon("ditto");
            setPokemon1(p1);
            setPokemon2(p2);
        };

        load();
    }, []);


    return (

        <div>
            <Header />

            <div className="p-6 text-center">

                <button onClick={simulateBattle} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Start Battle
                </button>
                {battleResult && (
                    <p className="mt-4 text-lg font-semibold text-green-600">
                        {battleResult}
                    </p>
                )}

                {/* Player sections */}
                <div className="flex justify-center gap-8 mt-10">
                    {/* Player 1 */}
                    <div className="w-1/2">
                        <h2 className="text-xl font-bold whitespace-nowrap">Player 1</h2>
                        <PokemonDropdown />
                    </div>

                    {/* Player 2 */}
                    <div className="w-1/2">
                        <h2 className="text-xl font-bold whitespace-nowrap">Player 2</h2>
                        <PokemonDropdown />
                    </div>
                </div>
            </div>

        </div>
    );



}



export default BattlePage;