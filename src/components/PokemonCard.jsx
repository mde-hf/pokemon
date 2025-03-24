import React from "react";


function PokemonCard({ data }) {

    if (!data) {
        return (
            <div className="text-center text-gray-500 mt-4">
                No Pokémon selected.
            </div>
        );
    }

    return (
        <div className="border p-4 rounded-lg shadow-md max-w-xs mx-auto mt-4 text-center bg-white">
            <h2 className="text-xl font-bold capitalize mb-2">{data.name}</h2>

            <img
                src={data.sprites?.other['official-artwork'].front_default}
                alt={data.name}
                className="w-32 h-32 mx-auto object-contain"
            />
        </div>
    );
}

export default PokemonCard;