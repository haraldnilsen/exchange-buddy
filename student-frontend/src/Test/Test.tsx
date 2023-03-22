import React, { useState } from "react";
import StudentService, { Student } from "./StudentService";
import axios from "axios";

const Test: React.FC = () => {

    const [name, setName] = useState("");
    const [studentnr, setStudentnr] = useState(0);

    const STUDENT_REST_API_URL: string = 'http://localhost:8080/api/student';

    // handle student submit - creates student class and sends it to the postStudent method
    const handleStudSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const student: Student = {
            name: name,
            studentnr: studentnr
        }

        await StudentService.postStudent(student).then((response: any) => {
            console.log(response);
        })
    }

    return(
        <>
            <form onSubmit={e => handleStudSubmit(e)} className="flex flex-col items-center border-solid bg-blue-300 w-96 h-64 rounded-2xl shadow-xl flex justify-center items-center">
                <h1 className="m-1 underline ">New Student</h1>
                {/* onChange sends the values to the state, which then is used to submit data */}
                <input name="studname" onChange={e => setName(e.target.value)} value={name} className="rounded h-8 m-1 text-center" placeholder="Name" />
                <input name="studentnr" onChange={e => setStudentnr(Number(e.target.value))} value={studentnr} className="rounded h-8 m-1 text-center" placeholder="Studentnummer" />
                <button className="bg-violet-400 w-20 rounded m-1">Submit</button>
            </form>
        </>
    );
}

export default Test;