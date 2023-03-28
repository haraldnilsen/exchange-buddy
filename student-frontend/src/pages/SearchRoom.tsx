import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdWifi } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import RoomPost, { RoomPostProps, RoompostToBackend } from "../components/RoomPost";
import RoomPostService from "../util/RoomPostService";
import { NewtonsCradle } from '@uiball/loaders'

const SearchRoom: React.FC = () => {

    interface RoomRes {
        address: string;
        term: string; 
        city: string;
        country: string;
        active: boolean;
        roomates: string;
        bio: string;
        wifi: boolean;
        appliances: boolean;
        mobile: {
            mobile: string;
            fname: string;
            lname: string;
        };
        price: string;
        kvm: string;
        picture: string;
    }
    
    const [loading, setLoading] = useState(false);

    // Mulig det må spesifiseres hordan type array det skal være sånn som i Student-test
    /* Search parameters */
    const [searchResults, setSearchResults] = useState<RoomRes[]>([]);
    const [searchbar, setSearchbar] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [term, setTerm] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [roomates, setRoomates] = useState("");
    const [wifi, setWifi] = useState(true);
    const [appliances, setAppliances] = useState(true);
    const [roomsizeFrom, setRoomsizeFrom] = useState("");
    const [roomsizeTo, setRoomsizeTo] = useState("");
    
    // onClick funksjon for antall rommates slik at den som blir trykket på lyser farge, når ny blir trykket på endres fargen til den som ble trykket på

    const clearInput = () => {
        setSearchbar("");
        setPriceFrom("");
        setPriceTo("");
        setTerm("");
        setCity("");
        setCountry("");
        setRoomates("");
        setWifi(true);
        setAppliances(true);
        setRoomsizeFrom("");
        setRoomsizeTo("");
    }

    // Her må det filtrers for:
        // - fra og til pris
        // - fra og til romstørrelse
    const handleSearch = async(e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        const Roompost: RoompostToBackend = {
            address: "",
            term: term,
            city: city,
            country: country,
            active: true,
            roomates: roomates,
            bio: "",
            wifi: wifi,
            appliances: appliances,
            mobile: "",
            price: "",
            kvm: "",
            picture: "",
        }
        console.log("Sending roompost request to backend");

        await RoomPostService.getAllRoomPosts().then((response) => {
            console.log(response.data);
            setSearchResults(response.data);
        })

        setTimeout(() => setLoading(false), 10);
        setTimeout(() => clearInput(), 1000);

        // function to further filter the data
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
                        <label>Search rooms</label>
                        <input onChange={e => setSearchbar(e.target.value)} className="border-2 rounded-md h-10 w-64" />
                    </div>
                    {/* Search Term */}
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
                    {/* Sizing */}
                    <div className="flex my-2">
                        <div className="flex flex-col">
                            <input onChange={e => setRoomsizeFrom(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>from m2</label>
                        </div>
                        <div className="flex flex-col mx-4">
                            <input onChange={e => setRoomsizeTo(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>to m2</label>
                        </div>
                        <div className="flex flex-col">
                            <button type="submit" className="h-10 w-16 border-2 rounded-md">search</button>
                        </div>
                    </div>
                    {/* number of roomates */}
                    <div className="flex my-2">
                        <div onClick={e => setRoomates("1")} className="h-11 w-11 border-2 rounded-l">1+</div>
                        <div onClick={e => setRoomates("2")} className="h-11 w-11 border-2 text-center">2+</div>
                        <div onClick={e => setRoomates("3")} className="h-11 w-11 border-2 text-center">3+</div>
                        <div onClick={e => setRoomates("4")} className="h-11 w-11 border-2 text-center">4+</div>
                        <div onClick={e => setRoomates("5")} className="h-11 w-11 border-2 text-center">5+</div>
                        <div onClick={e => setRoomates("6")} className="h-11 w-11 border-2 rounded-r text-center">6+</div>
                    </div>
                    {/* Wifi and appliances */}                                                                                                     {/* MÅ ENDRE STATE TIL WIFI OG HVITVARER */}
                    <div className="flex my-2">
                        <input  type="radio" />
                        <MdWifi className="text-3xl mx-3" />
                        <input type="radio" />
                        <GiWashingMachine className="text-3xl mx-3" />
                    </div>
                    {/* Search button */}
                    <input type="submit" className="w-1/2 h-9 rounded-md border-b-4 border-black bg-gray-300 items-center justify-center flex my-2" value="search" />
                </form>

                {/* Results */}
                <div className="flex flex-col w-1/2">
                    {
                        searchResults.map((room: RoomRes) => {

                            const roomPost: RoomPostProps = {
                                address: room.address,
                                term: room.term,
                                city: room.city,
                                country: room.country,
                                active: room.active,
                                roomates: room.roomates,
                                bio: room.bio,
                                wifi: room.wifi,
                                appliances: room.appliances,
                                mobile: room.mobile.mobile,
                                fname: room.mobile.fname,
                                lname: room.mobile.lname,
                                price: room.price,
                                kvm: room.kvm,
                                picture: room.picture,
                            }

                            return(
                                <RoomPost key={room.address} roomPostProps={roomPost} />
                            );
                        })
                    }
                </div>

            </div>

            <Footer />
        </>
    );
}

export default SearchRoom;