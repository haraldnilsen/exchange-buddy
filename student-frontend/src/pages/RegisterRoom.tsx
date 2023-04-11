import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserService from "../util/UserService";
import Footer from "../components/Footer";

const RegisterRoom: React.FC = () => {

    const [term, setTerm] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [roomates, setRoomates] = useState("");
    const [bio, setBio] = useState("");
    const [wifi, setWifi] = useState(false);
    const [appliances, setAppliances] = useState(false);
    const [price, setPrice] = useState("");
    const [kvm, setKvm] = useState("");
    const [picture, setPicture] = useState("");

    const handleUserSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const roompost = {
            address: address,
            term: term, 
            city: city,
            country: country,
            roomates: roomates,
            bio: bio,
            wifi: wifi,
            appliances: appliances,
            price: price,
            kvm: kvm,
            picture: picture,
        }

        console.log("Sending room to backend");


    }

    return (
        <>
            <div>
                <Navbar/>
                {/* Container for form */}
                <div className="">
                    {/* Form */}
                    <form className="flex flex-col shadow-2xl pt-24" onSubmit={e => handleUserSubmit(e)}>
                        {/* Header */}
                        <h1 className="text-center font-bold text-2xl mb-8 pt-10">Register Room</h1>
                        <div className="flex justify-center">

                            <div className="flex flex-col">
                                <label className="mx-1">Term</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-b-black outline-none"
                                    onChange={e => setTerm(e.target.value)}
                                    value={term}
                                />
                                <label className="mx-1">Address</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setAddress(e.target.value)}
                                    value={address}
                                />
                                <label className="mx-1">City</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    type="password"
                                    onChange={e => setCity(e.target.value)}
                                    value={city}
                                />
                                <label className="mx-1">Country</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setCountry(e.target.value)}
                                    value={country}
                                />
                                <label className="mx-1">Roomates</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setRoomates(e.target.value)}
                                    value={roomates}
                                />
                                <label className="mx-1">Price</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setPrice(e.target.value)}
                                    value={price}
                                />
                                <label className="mx-1">Size of room (in sqm)</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setKvm(e.target.value)}
                                    value={kvm}
                                />
                                <label className="mx-1">Picture</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setPicture(e.target.value)}
                                    value={picture}
                                />
                                
                                
                            </div>
                            <div className="flex flex-col ml-10 mt-10">
                                <label className="mx-1">Bio</label>
                                <textarea className="bg-pink-200 rounded text-green-700 w-72 h-72 m-1 my-2 border-b-2 border-black outline-none" 
                                name="" id="" cols={30} rows={10}
                                onChange={e => setBio(e.target.value)}
                                    value={bio}/>
                                    <select className="bg-pink-200 rounded text-black w-30 h-8 m-1 my-2 border-b-2 border-black outline-none" name="active" id="active">
                                    <option value={"true"}>Wifi</option>
                                    <option value={"false"}>No wifi</option>
                                </select>
                                <select className="bg-pink-200 rounded text-black w-30 h-8 m-1 my-2 border-b-2 border-black outline-none" name="active" id="active">
                                    <option value={"true"}>Appliances</option>
                                    <option value={"false"}>No appliances</option>
                                </select>
                                <select className="bg-pink-200 rounded text-black w-30 h-8 m-1 my-2 border-b-2 border-black outline-none" name="active" id="active">
                                    <option value={"true"}>Active</option>
                                    <option value={"false"}>Inactive</option>
                                </select>
                            </div>
                        </div>

                        <input className="shadow-md justify-center flex text-center my-8 bg-green-500 border-b-4 rounded-xl border-green-900 h-10 hover:bg-gray-500 hover:border-gray-900 mx-64" type="submit" value="Register"/>

                    </form>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default RegisterRoom;