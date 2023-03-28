import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdWifi } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import RoomPost, { RoomPostProps } from "../components/RoomPost";

const SearchRoom: React.FC = () => {

    const roomPostProps: RoomPostProps = {
        address: "Fjøsangerveien 57",
        term: "2020-2021",
        city: "Oslo",
        country: "Norway",
        active: true,
        roomates: "1",
        bio: "hei på deg",
        wifi: true,
        appliances: true,
        mobile: "12345678",
        price: "1000",
        kvm: "20",
        picture: "picture"
    }
    
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

    // onClick funksjon for antall rommates slik at den som blir trykket på lyser farge, når ny blir trykket på endres fargen til den som ble trykket på

    return(
        <>
            <Navbar />

            {/* Container */}
            <div className="flex justify-center mt-32">

                {/* Search specs */}
                <form className="flex flex-col mx-6 mt-20">
                    {/* Search rooms */}
                    <div className="flex flex-col my-2">
                        <label>Search rooms</label>
                        <input className="border-2 rounded-md h-10 w-64" />
                    </div>
                    {/* Search Country */}
                    <div className="flex flex-col my-2">
                        <label>Country</label>
                        <input className="border-2 rounded-md h-10 w-64" placeholder="DROPDOWN TODO" />
                    </div>
                    {/* Search city */}
                    <div className="flex flex-col my-2">
                        <label>City</label>
                        <input className="border-2 rounded-md h-10 w-64" placeholder="DROPDOWN TODO" />
                    </div>
                    {/* Pricing */}
                    <div className="flex my-2">
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
                    <div className="flex my-2">
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
                    <div className="flex my-2">
                        <button className="h-11 w-11 border-2 rounded-l">Fritt</button>
                        <button className="h-11 w-11 border-2">1+</button>
                        <button className="h-11 w-11 border-2">2+</button>
                        <button className="h-11 w-11 border-2">3+</button>
                        <button className="h-11 w-11 border-2">4+</button>
                        <button className="h-11 w-11 border-2 rounded-r">5+</button>
                    </div>
                    {/* Wifi and appliances */}
                    <div className="flex my-2">
                        <input type="radio" />
                        <MdWifi className="text-3xl mx-3" />
                        <input type="radio" />
                        <GiWashingMachine className="text-3xl mx-3" />
                    </div>
                    {/* Search button */}
                    <input type="submit" className="w-1/2 h-9 rounded-md border-b-4 border-black bg-gray-300 items-center justify-center flex my-2" value="search" />
                </form>

                {/* Results */}
                <div className="flex flex-col w-1/2">
                    <RoomPost roomPostProps={roomPostProps} />
                    <RoomPost roomPostProps={roomPostProps} />
                    <RoomPost roomPostProps={roomPostProps} />
                    <RoomPost roomPostProps={roomPostProps} />
                </div>

            </div>

            <Footer />
        </>
    );
}

export default SearchRoom;