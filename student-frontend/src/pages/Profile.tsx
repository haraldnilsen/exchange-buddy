import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RoomPost, { RoomPostProps } from "../components/RoomPost";
import Sindre from "../images/people/sindre.jpg"
import RoomPostService, { RoompostToBackend } from "../util/RoomPostService";
import RoomRes from "./SearchRoom"

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
                                <RoomPost roomPostProps={roomPost} />
                            );
                        })
                    }
                </div>
                    <h4>Profile ads</h4>
                    <div>

                    </div>
                </div>
            </div>
            <button onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
                }}>
                Sign out
            </button>
            <Footer />
        </div>
    </>
    )
}

