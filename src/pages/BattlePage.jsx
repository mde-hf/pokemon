import { useState, useContext, } from "react";
import React from "react";
import { BattleContext } from "../context/BattleContext";
import getPokemon from "../api/pokemonApi";
import PokemonDropdown from "../components/PokemonDropdown";
import PokemonCard from "../components/PokemonCard";



function BattlePage() {
    const { pokemon1,
        pokemon2,
        setPokemon1,
        setPokemon2,
        battleResult,
        simulateBattle } = useContext(BattleContext);

    const [resetDropdown1, setResetDropdown1] = useState(false);
    const [resetDropdown2, setResetDropdown2] = useState(false);

    const handleBattle = () => {
        simulateBattle();
        setResetDropdown1(true);
        setResetDropdown2(true);
    };

    return (

        <div>

            {/* Player sections */}
            <div className="flex justify-center gap-8 mt-10">
                {/* Player 1 */}
                <div className="w-1/2">
                    <h2 className="text-xl font-bold whitespace-nowrap">Player 1</h2>
                    <PokemonDropdown reset={resetDropdown1} onSelect={async (name) => {
                        const data = await getPokemon(name);
                        setPokemon1(data)
                    }} />
                    <PokemonCard data={pokemon1} />
                </div>

                {/* Player 2 */}
                <div className="w-1/2">
                    <h2 className="text-xl font-bold whitespace-nowrap">Player 2</h2>
                    <PokemonDropdown reset={resetDropdown2} onSelect={async (name) => {
                        const data = await getPokemon(name);
                        setPokemon2(data)
                    }} />
                    <PokemonCard data={pokemon2} />
                </div>

            </div>
            <div className="p-6 text-center">
                <button onClick={handleBattle} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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