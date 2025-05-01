import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return (

        <div className="fixed top-0 left-0 w-full z-50 bg-transparent text-white px-6 py-4 flex justify-between items-center shadow-md">
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/battle" className="hover:underline">Battle</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/detail" className="hover:underline">Details</Link>
            </div>
        </div>


    )
}

export default Header