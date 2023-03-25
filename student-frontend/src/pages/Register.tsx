import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserService from "../util/UserService";

/*
    FIKSE I MORGEN
    endre resten slik at det ser ut som login
        - ved å bare endre className til border strl
    
    Fikse submit knapp
    Sjekke at alt funker som det sksal og kommer i databasen
    
*/

const Register : React.FC = () => {

    const [mobile, setMobile] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateborn, setDateborn] = useState("");
    const [profilepicture, setProfilepicture] = useState("");
    const [sex, setSex] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");


    const handleUserSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userr = {
            mobile: mobile,
            fname: firstname,
            lname: lastname,
            fdate: dateborn,
            profilepic: profilepicture,
            sex: sex,
            salt: "",
            password: password
        }

        console.log("Sending user to backend");

        await UserService.postUser(userr).then((response) => {
            console.log(response);
        })

        alert("Bruker registrert!");
        setTimeout(() => clearInput(), 1000);
        window.location.replace("http://localhost:3000/");
    }

    const clearInput = () => {
        setMobile("");
        setFirstname("");
        setLastname("");
        setDateborn("");
        setProfilepicture("");
        setSex("");
        setPassword("");
        setRepeatPassword("");
    }

    return(
        <div className="flex items-center justify-center">
            <Navbar />
            {/* Container */}
            <div className="mt-52 flex justify-center items-center bg-pink-200 rounded-2xl shadow-md w-1/2 h-1/2 hover:shadow-2xl">
                {/* Image */}
                <div>
                    <img src={require("../images/trans.png")} />
                </div>

                {/* Form */}
                <form className="flex flex-col" onSubmit={e => handleUserSubmit(e)}>
                    {/* Header */}
                    <h1 className="text-center font-bold text-2xl mb-8 pt-10">Register</h1>
                    <div className="flex">

                        {/* Left side */}
                        <div className="flex flex-col">
                            <label className="mx-1">firstname</label>
                            <input
                                className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-b-black outline-none"
                                onChange={e => setFirstname(e.target.value)}
                                value={firstname}
                            />
                            <label className="mx-1">mobile</label>
                            <input
                                className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                onChange={e => setMobile(e.target.value)}
                                value={mobile}
                            />
                            <label className="mx-1">password</label>
                            <input
                                className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                            <label className="mx-1">profilepicture</label>
                            <input
                                className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                onChange={e => setProfilepicture(e.target.value)}
                                value={profilepicture}
                            />
                        </div>

                        {/* Right side */}
                        <div className="flex flex-col">
                            <label className="mx-1">lastname</label>
                            <input
                                className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                onChange={e => setLastname(e.target.value)}
                                value={lastname}
                            />
                            <label className="mx-1">dateborn</label>
                            <input
                                className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                onChange={e => setDateborn(e.target.value)}
                                value={dateborn}
                            />
                            <label className="mx-1">repeat password</label>
                            <input
                                className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                type="password"
                                onChange={e => setRepeatPassword(e.target.value)}
                                value={repeatPassword}
                            />
                            <label className="mx-1">sex</label>
                            <input
                                className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                onChange={e => setSex(e.target.value)}
                                value={sex}
                            />
                        </div>
                    </div>

                    <input className="shadow-md justify-center flex text-center my-8 bg-green-500 border-b-4 rounded-xl border-green-900 h-10 hover:bg-gray-500 hover:border-gray-900 ml-20 mr-20" type="submit" />

                </form>
            </div>
        </div>
    );
}

export default Register;
