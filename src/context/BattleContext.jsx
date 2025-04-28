import React from "react";
import { createContext, useState } from "react";

const BattleContext = createContext();

function BattleProvider({ children }) {


    const [pokemon1, setPokemon1] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)
    const [battleResult, setBattleResult] = useState(null);

    const simulateBattle = () => {

        if (!pokemon1 || !pokemon2) return;

        const totalStats1 = pokemon1.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
        const totalStats2 = pokemon2.stats.reduce((sum, stat) => sum + stat.base_stat, 0);

        if (totalStats1 > totalStats2) {
            setBattleResult(`${pokemon1.name} wins!`);
        } else if (totalStats2 > totalStats1) {
            setBattleResult(`${pokemon2.name} wins!`);
        } else {
            setBattleResult("It's a draw!");
        }
    }

    return (

        <BattleContext.Provider value={{
            pokemon1,
            setPokemon1,
            pokemon2,
            setPokemon2,
            battleResult,
            simulateBattle
        }}>
            {children}
        </BattleContext.Provider>
    )
}


export { BattleContext, BattleProvider };
