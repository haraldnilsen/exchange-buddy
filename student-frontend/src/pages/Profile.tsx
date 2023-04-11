import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RoomPost, { RoomPostProps } from "../components/RoomPost";
import Sindre from "../images/people/sindre.jpg"
import RoomPostService, { RoompostToBackend } from "../util/RoomPostService";
import RoomRes from "./SearchRoom"
import Button3d from "../icons/Button3d";
import { NavLink } from "react-router-dom";

export default function Profile () {

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

    const [searchResults, setSearchResults] = useState<RoomRes[]>([]);
    const [userMobile, setUserMobile] = useState("");

    const findRooms = async (mobile: string) => {

        await RoomPostService.getRoompostByMobile(mobile).then((response) => {
            setSearchResults(response.data);
        })
    }

    useEffect(() => {
        if (localStorage.getItem("user") == null) {
            window.location.replace("http://localhost:3000/");
        } else {
            findRooms(localStorage.getItem("user")!);
            console.log(searchResults)
        }
    })

    return (
    <>
        <div>
            <Navbar />
            <div className="items-center pt-40 flex flex-col">
                {/*Profile header*/}
                <div className="">
                    <div className="flex m-2">
                        <img src={Sindre} className="rounded-full h-36"/>
                        <div className="my-auto px-10">
                            <h2 className="text-4xl">Ola Nordmann</h2>
                        </div>
                    </div>
                </div>
                {/* Container for profile ads */}
                <div className="shadow-xl bg-slate-100 mt-16 p-14 w-full">
                    <h3 className="text-4xl py-5">My ads</h3>

                    {/* List of room ads */}
                    <h4 className="text-2xl">Ads for your rooms:</h4>
                    <div className="flex flex-col">
                        <div>
                            {searchResults.length > 0 ? "Ads" : 
                            
                            <div className="">
                                <p className="p-2">Looks like you have no current ads! Click here to create one:</p>
                                <NavLink to="/RegisterRoom">
                                    <button className="bg-d-green hover:bg-green-900 text-white font-bold py-2 mx-10 my-5 px-4 rounded">Create add</button>
                                </NavLink>
                            </div>}
                        </div>
                    </div>
                </div>
                {/*Sign out-button*/}
                
                    <button className="bg-d-green hover:bg-green-900 text-white font-bold py-4 mt-32 px-6 rounded" onClick={() => {
                    localStorage.removeItem("user");
                    window.location.reload();
                    }}>
                    Sign out
                    </button>
                
            </div>
            
            <Footer />
        </div>
    </>
    )
}

