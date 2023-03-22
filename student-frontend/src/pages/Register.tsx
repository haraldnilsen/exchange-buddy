import React from "react";
import Navbar from "../components/Navbar";
import Button3d from "../icons/Button3d";

const Register : React.FC = () => {
    return(
        <>
            <Navbar />
            <div className="justify-center items-center flex mt-64">
                {/* Image */}
                <div className="bg-pink-200 h-96 rounded-l-xl shadow-2xl">
                    <img src={require("../images/trans.png")} />
                </div>

                {/* form */}
                <form className="bg-pink-200 h-96 w-64 rounded-r-xl shadow-2xl">
                    <h1 className="text-d-green text-center mt-4 font-bold text-2xl m-2">Register</h1>
                    <div className="items-center flex flex-col">
                        <input className="bg-green-800 text-center rounded text-white w-30 h-8 m-1" placeholder="mobile"/>
                        <input className="bg-green-800 text-center rounded text-white w-30 h-8 m-1" placeholder="firstname"/>
                        <input className="bg-green-800 text-center rounded text-white w-30 h-8 m-1" placeholder="lastname"/>
                        <input className="bg-green-800 text-center rounded text-white w-30 h-8 m-1" placeholder="date born"/>
                        <input className="bg-green-800 text-center rounded text-white w-30 h-8 m-1" placeholder="profilepicture url"/>
                        <input className="bg-green-800 text-center rounded text-white w-30 h-8 m-1" placeholder="sex"/>
                        <input className="bg-green-800 text-center rounded text-white w-30 h-8 m-1" type="password" placeholder="passord"/>
                        <Button3d text="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;