import React from "react";

export interface RoomPostProps {
    address: string;
    term: string; 
    city: string;
    country: string;
    active: boolean;
    roomates: string;
    bio: string;
    wifi: boolean;
    appliances: boolean;
    mobile: string;
    fname: string;
    lname: string;
    price: string;
    kvm: string;
    picture: string;
}

const RoomPost: React.FC<{ roomPostProps: RoomPostProps }> = ({ roomPostProps }) => {

    return(
        <>
            {/* Roompost container */}
            <div className="w-full h-1/2 bg-gray-200 rounded-md shadow-xl hover:shadow-2xl my-6 mx-4 pb-4">
                {/* Images */}                                                {/* <== Kanskje lage image slider her */}
                <div className="flex">
                    <img className="w-1/2 border-2 rounded" src={require("../images/apartment.png")} alt="room" />
                    <img className="w-1/2 border-2 rounded" src={require("../images/apartment.png")} alt="room" />
                </div>

                {/* Info */}
                <div className="flex flex-col w-full">
                    <div className="flex justify-between w-100 mx-10 mt-4">
                        <p>{roomPostProps.fname} {roomPostProps.lname}</p>
                        <p>{roomPostProps.country}, {roomPostProps.city}</p>
                    </div>
                    <div className="mx-10 mt-2">
                        <h3 className="text-xl font-bold">{roomPostProps.address}, {roomPostProps.roomates} roomates</h3>
                        <h3 className="text-xl font-bold">{roomPostProps.kvm}m<sup>2</sup>   {roomPostProps.price}kr/mnd</h3>
                        <p className="mt-4 text-xs font-thin">mobile: {roomPostProps.mobile}</p>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default RoomPost;