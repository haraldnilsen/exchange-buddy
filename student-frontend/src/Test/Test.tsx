import React from "react";

const Test: React.FC = () => {

    return(
        <>
            <form className="border-solid bg-blue-300 w-96 h-64 rounded-2xl shadow-xl flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className="m-1 underline ">New Student</h1>
                    <input name="name" className="rounded h-8 m-1 text-center" placeholder="Name" />
                    <input name="studentnr" className="rounded h-8 m-1 text-center" placeholder="Studentnummer" />
                    <button className="bg-violet-400 w-20 rounded m-1">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Test;