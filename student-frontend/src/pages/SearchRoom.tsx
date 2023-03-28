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
    const [roomsize, setRoomsize] = useState("");
    
    /* Other state hooks */

    return(
        <>
            <Navbar />

            {/* Container */}
            <div className="flex justify-center mt-32">

                {/* Search specs */}
                <div className="flex flex-col mx-6 mt-20">
                    {/* Search rooms */}
                    <label>Search rooms</label>
                    <input className="border-2 rounded-md h-10 w-64" />
                    {/* Search Country */}
                    <label>Country</label>
                    <input className="border-2 rounded-md h-10 w-64" placeholder="DROPDOWN TODO" />
                    {/* Search city */}
                    <label>City</label>
                    <input className="border-2 rounded-md h-10 w-64" placeholder="DROPDOWN TODO" />
                    {/* Pricing */}
                    <label>Total price</label>
                    <div className="flex">
                        <div className="flex flex-col">
                            <input className="h-10 w-20 border-2 rounded-md" />
                            <label>from kr</label>
                        </div>
                        <div className="flex flex-col mx-4">
                            <input className="h-10 w-20 border-2 rounded-md" />
                            <label>to kr</label>
                        </div>
                        <div className="flex flex-col">
                            <button className="h-10 w-16 border-2 rounded-md">search</button>
                        </div>
                    </div>
                    {/* Sizing */}
                    <div className="flex">
                        <div className="flex flex-col">
                            <input className="h-10 w-20 border-2 rounded-md" />
                            <label>from m2</label>
                        </div>
                        <div className="flex flex-col mx-4">
                            <input className="h-10 w-20 border-2 rounded-md" />
                            <label>to m2</label>
                        </div>
                        <div className="flex flex-col">
                            <button className="h-10 w-16 border-2 rounded-md">search</button>
                        </div>
                    </div>
                    {/* number of roomates */}
                    <div>
                        {/* lage n rekke med knapper med antall roomates på som value, direkte søk */}
                    </div>
                    {/* Wifi and appliances */}
                    <div>
                        {/* Radiobuttons */}
                    </div>


                </div>

                {/* Results */}
                <div className="flex flex-col w-1/2">
                    {/* Mock pictures */}
                    <div className="w-1/2 my-4">
                        <img alt="picture" src={require("../images/apartment.png")} />
                    </div>
                    <div className="w-1/2 my-4">
                        <img alt="picture" src={require("../images/apartment.png")} />
                    </div>
                    <div className="w-1/2 my-4">
                        <img alt="picture" src={require("../images/apartment.png")} />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}

export default SearchRoom;