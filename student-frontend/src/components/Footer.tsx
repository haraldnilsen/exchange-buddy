import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer : React.FC = () => {


    return(
        <>
            <hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-300 mt-32"></hr>

            {/* Container */}
            <div className="flex items-top justify-center">

                {/* element 1 */}
                <div className="mx-4">
                    <p className="font-extrabold text-2xl">Cheaper possabilities</p>
                </div>

                {/* element 2 */}
                <div className="flex flex-col mx-4">
                    <h3 className="text-xl font-bold">About exchange-buddy</h3>
                    <p>Work for us</p>
                    <p>Get inspired</p>
                </div>

                {/* element 3 */}
                <div className="flex flex-col mx-4">
                    <h3 className="text-xl font-bold">Privacy</h3>
                    <p>Privacy statement</p>
                    <p>Privacy exchange-buddy</p>
                    <p>Settings for privacy</p>
                    <p>Cookies</p>
                </div>

                {/* element 4 */}
                <div className="flex flex-col mx-4">
                    <h3 className="text-xl font-bold">Get help</h3>
                    <p>Customerservice</p>
                    <p>Terms of use</p>
                    <p>Post rules</p>
                </div>
            </div>
            
            <div className="flex justify-center items-center">
                <hr className="w-3/4 h-0.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-300 mt-32"></hr>
            </div>
            
            <div className="flex justify-center items-center">
                {/* Icons */}
                <div className="flex mx-8"> 
                    <BsFacebook className="mx-4 text-2xl hover:text-green-700"/>
                    <BsTwitter className="mx-4 text-2xl hover:text-green-700"/>
                    <BsInstagram className="mx-4 text-2xl hover:text-green-700"/>
                    <BsYoutube className="mx-4 text-2xl hover:text-green-700"/>
                </div>
                <div className="flex-col mx-8 mt-8">
                    <p>Innholdet er beskyttet etter åndsverkloven. Regelmessig, systematisk eller kontinuerlig innhenting, lagring, indeksering, </p>
                    <p>distribusjon og all annen form for sammenstilling av data tillates ikke uten eksplisitt, skriftlig tillatelse fra FINN.no. © 1996–2023 FINN.no</p>
                    <p>AS</p>
                </div>
            </div>
        </>
    );
}

export default Footer;