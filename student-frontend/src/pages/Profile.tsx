import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sindre from "../images/people/sindre.jpg"

export default function Profile () {

    useEffect(() => {
        if (localStorage.getItem("user") == null) {
            window.location.replace("http://localhost:3000/");
        }
    })

    return (
    <>
        <div>
            <Navbar />
            <div className="items-center pt-40 flex flex-col">
                {/*Profile header*/}
                <div className=" bg-slate-200">
                    <div className="flex m-2">
                        <img src={Sindre} className="rounded-full h-36"/>
                        <div className="my-auto px-10">
                            <h2 className="text-4xl">Ola Nordmann</h2>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-500 mt-10 w-64">
                    <h3 className="text-4xl">My ads</h3>

                    <h4>Room ads</h4>
                    <div>

                    </div>
                    <h4>Profile ads</h4>
                    <div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
    )
}

