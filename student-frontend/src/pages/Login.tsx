import React from "react";
import Navbar from "../components/Navbar";

// Login page for the webapp

const Login : React.FC = () => {
    return(
        <> 
            <Navbar />
            <div className="justify-center items-center flex">
                <div className="justify-center items-center flex sd:flex-col bg-pink-200 rounded-xl shadow-md hover:shadow-2xl mt-64">
                    {/* Image */}
                    <div className="w-1/2 py-4">
                        <img src={require("../images/login.png")} />
                    </div>

                    {/* Form */}
                    <form className="w-1/4">
                        <h1 className="text-bold text-2xl text-center mb-8">Login</h1>
                        <p className="my-0 mx-2">Username</p>
                        <input className="bg-pink-200 border-b-2 rounded border-b-black m-2" />
                        <p className="my-0 mx-2">Password</p>
                        <input className="bg-pink-200 border-b-2 rounded border-b-black m-2" /><br/>
                        <input className="w-44 bg-green-500 border-b-4 border-green-900 h-9 hover:bg-gray-500 hover:border-gray-900 mx-2 my-4 rounded-xl " type="submit" value="login"/>
                    </form> 
                </div>
            </div>
        </>
    );
}

export default Login;