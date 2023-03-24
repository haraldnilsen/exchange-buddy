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

const Register2 : React.FC = () => {


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
        clearInput();
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
    }

    return(
        <div className="flex items-center justify-center">
            <Navbar />
            {/* Container */}
            <div className="mt-64 flex justify-center items-center bg-pink-200 rounded-2xl shadow-2xl w-1/2">
                {/* Image */}
                <div>
                    <img src={require("../images/trans.png")} />
                </div>

                {/* Form */}
                <form className="flex flex-col">
                    {/* Header */}
                    <h1 className="text-center font-bold text-2xl mb-8">Register</h1>
                    <div className="flex">

                        {/* Left side */}
                        <div className="flex flex-col">
                        <input
                            className="bg-pink-200 text-center rounded text-white w-30 h-8 m-1 border-b-2 border-b-black"
                            onChange={e => setFirstname(e.target.value)}
                            value={firstname}
                        />
                        <input
                            className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                            onChange={e => setMobile(e.target.value)}
                            value={mobile}
                        />
                        <input
                            className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                            type="password"
                            onChange={e => setRepeatPassword(e.target.value)}
                            value={password}
                        />
                        <input
                            className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                            onChange={e => setProfilepicture(e.target.value)}
                            value={profilepicture}
                        />
                        </div>

                        {/* Right side */}
                        <div className="flex flex-col">
                        <input
                            className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                            onChange={e => setLastname(e.target.value)}
                            value={lastname}
                        />
                        <input
                            className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                            onChange={e => setDateborn(e.target.value)}
                            value={dateborn}
                        />
                        <input
                            className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <input
                            className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                            onChange={e => setSex(e.target.value)}
                            value={sex}
                        />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register2;
