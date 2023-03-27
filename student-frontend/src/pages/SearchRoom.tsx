import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SearchRoom : React.FC = () => {
    
    // Mulig det må spesifiseres hordan type array det skal være sånn som i Student-test
    /* Search parameters */
    const [searchResults, setSearchResults] = useState([]);
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [term, setTerm] = useState();
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [roomates, setRomates] = useState("");
    const [wifi, setWifi] = useState(false);
    const [appliances, setAppliances] = useState("");
    
    /* Other state hooks */

    return(
        <>
            <Navbar />

            {/* Container */}
            <div className="flex justify-center items-center mt-32">

                {/* Search specs */}
                <div className="flex flex-col">
                    <label>Search rooms</label>
                    <input className="border-2 rounded-md h-10 w-64" />
                </div>

                {/* Results */}
                <div>
                    Res
                </div>

            </div>

            <Footer />
        </>
    );
}

export default SearchRoom;