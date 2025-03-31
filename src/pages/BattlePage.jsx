import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { BattleContext, BattleProvider } from "../context/BattleContext";
import getPokemon from "../api/pokemonApi";



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
    );

}



export default BattlePage;