import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserPost from "../components/UserPost";
import RoomPost from "../components/RoomPost";

const SearchUser: React.FC = () => {

    // Må ha type
    const [] = useState();
    const [loading, setLoading] = useState(false);

    /* Search parameters */
    const [searchbar, setSearchbar] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [term, setTerm] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");

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
                        <input onChange={e => setSearchbar(e.target.value)} className="border-2 rounded-md h-10 w-64" />
                    </div>
                    {/* Search Country */}
                    <div className="flex flex-col my-2">
                        <label>Term</label>
                        <input onChange={e => setTerm(e.target.value)} className="border-2 rounded-md h-10 w-64" placeholder="DROPDOWN TODO" />
                    </div>
                    {/* Search Country */}
                    <div className="flex flex-col my-2">
                        <label>Country</label>
                        <input onChange={e => setCountry(e.target.value)} className="border-2 rounded-md h-10 w-64" placeholder="DROPDOWN TODO" />
                    </div>
                    {/* Search city */}
                    <div className="flex flex-col my-2">
                        <label>City</label>
                        <input onChange={e => setCity(e.target.value)} className="border-2 rounded-md h-10 w-64" placeholder="DROPDOWN TODO" />
                    </div>
                    {/* Pricing */}
                    <div className="flex my-2">
                        <div className="flex flex-col">
                            <input onChange={e => setPriceFrom(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>from kr</label>
                        </div>
                        <div className="flex flex-col mx-4">
                            <input onChange={e => setPriceTo(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>to kr</label>
                        </div>
                        <div className="flex flex-col">
                            <button type="submit" className="h-10 w-16 border-2 rounded-md">search</button>
                        </div>
                    </div>
                    {/* Age */}
                    <div className="flex flex-col">
                        <label>Age</label>
                        <input onChange={e => setDate(e.target.value)} className="border-2 rounded-md h-10 w-20" />
                    </div>
                </form>

                {/* Results */}
                <div className="flex flex-wrap w-1/2">
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                </div>

            </div>
            <div className="h-96">

            </div>
            <Footer />
        </>
    );
}

export default SearchUser;