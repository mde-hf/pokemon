import React from "react";


function PokemonCard({ data }) {

    if (!data) {
        return (
            <div className="text-center text-gray-500 mt-9">
                No Pokémon picked.
            </div>
        );
    }

    return (
        <div className="border p-4 rounded-lg shadow-md max-w-xs mx-auto mt-4 text-center bg-black-100">
            <h2 className="text-xl font-bold capitalize mb-2">Name: {data.name}</h2>
            <img
                src={data.sprites?.other['official-artwork'].front_default}
                alt={data.name}
                className="w-32 h-32 mx-auto object-contain"
            />
            <h2> Total Power 💥 : {data.stats.reduce((sum, stat) => sum + stat.base_stat, 0)} </h2>

            <h2>Abilities 💪 :</h2>
            <ul className="list-disc list-inside flex flex-col gap-2">
                {data.abilities.map(talent => (
                    <li key={talent.ability.name}>
                        {talent.ability.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonCard;