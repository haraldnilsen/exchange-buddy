import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserPost from "../components/UserPost";
import RoomPost from "../components/RoomPost";
import { UserrPost } from "../util/UserService";
import { NewtonsCradle } from '@uiball/loaders'
import UserService from "../util/UserService";

const SearchUser: React.FC = () => {

    const [cities, setCities] = useState("");
    const [countries, setCountries] = useState("");
    const [searchResults, setSearchResults] = useState("");

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

    useEffect(() => {
        getCountriesAndCities();
    }, []);

    const getCountriesAndCities = async () => {
        await UserService.getUserCountries().then((response) => {
            setCountries(response.data);
        })
        await UserService.getUserCities().then((response) => {
            setCities(response.data);
        })
    }

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        const search: UserrPost = {
            term: term,
            city: city,
            country: country,
            active: true,
            bio: "",
            minPrice: priceFrom,
            maxPrice: priceTo,
        }
        console.log("Sending userpost search request to backend");

        await UserService.searchUser(search).then((response) => {
            console.log(response);
            setSearchResults(response.data);
            clearInputs();
        })

        setTimeout(() => setLoading(false), 50);

    }

    const clearInputs = () => {
        setSearchbar("");
        setPriceFrom("");
        setPriceTo("");
        setTerm("");
        setCity("");
        setCountry("");
        setDate("");
    }

    if(loading) {
        return(
            <div className="flex items-center justify-center mt-96">
                <NewtonsCradle 
                    size={70}
                    speed={1.4} 
                    color="pink" 
                />
            </div>
        );
    }

    return(
        <> 
            <Navbar />
            {/* Container */}
            <div className="flex justify-center mt-32">

                {/* Search specs */}
                <form onSubmit={e => handleSearch(e)} className="flex flex-col mx-6 mt-20">
                    {/* Search rooms */}
                    <div className="flex flex-col my-2">
                        <label>Search Buddies</label>
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
                    <label>Price</label>
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
                            <button type="submit" className="h-10 w-16 border-2 rounded-md">Search</button>
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