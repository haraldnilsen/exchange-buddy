import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserPost from "../components/UserPost";
import RoomPost from "../components/RoomPost";

const SearchUser: React.FC = () => {

    const [cities, setCities] = useState("");
    const [countries, setCountries] = useState("");

    // Må ha type
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
                        <select onChange={e => setTerm(e.target.value)} className="border-2 rounded-md h-10 w-64">
                            <option value=""></option>
                            <option value="2022V">2022V</option>
                            <option value="2022H">2022H</option>
                            <option value="2023V">2023V</option>
                            <option value="2023H">2023H</option>
                            <option value="2024V">2024V</option>
                            <option value="2024H">2024H</option>
                            <option value="2025V">2025V</option>
                            <option value="2025H">2025H</option>
                        </select>
                    </div>
                    {/* Search Country */}
                    <div className="flex flex-col my-2">
                        <label>Country</label>
                        <select onChange={e => setCountry(e.target.value)} className="border-2 rounded-md h-10 w-64">
                            <option value=""></option>
                            {/*
                                HER MÅ DET LEGGES INN MAPPING
                            */}
                        </select>
                    </div>
                    {/* Search city */}
                    <div className="flex flex-col my-2">
                        <label>City</label>
                        <select onChange={e => setCity(e.target.value)} className="border-2 rounded-md h-10 w-64">
                            <option value=""></option>
                            {/*
                                HER MÅ DET LEGGES INN MAPPING
                            */}
                        </select>
                    </div>
                    {/* Pricing */}
                    <div className="flex my-2">
                        <div className="flex flex-col">
                            <input onChange={e => setPriceFrom(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>From kr</label>
                        </div>
                        <div className="flex flex-col mx-4">
                            <input onChange={e => setPriceTo(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>To kr</label>
                        </div>
                        <div className="flex flex-col">
                            <button type="submit" className="h-10 w-16 border-2 rounded-md">search</button>
                        </div>
                    </div>
                    {/*
                     Age
                    <div className="flex flex-col">
                        <label>Age</label>
                        <input onChange={e => setDate(e.target.value)} className="border-2 rounded-md h-10 w-20" />
                    </div>
                    */}
                </form>

                {/* Results */}
                <div className="flex flex-wrap w-8/12">
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