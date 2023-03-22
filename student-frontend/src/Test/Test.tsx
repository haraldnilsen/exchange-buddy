import React, { useState } from "react";
import StudentService, { Student } from "../util/StudentService";

const Test: React.FC = () => {

    const [studentData, setStudentData] = useState({
        studName: "",
        studNr: ""
    })

    // handle student submit - creates student class and sends it to the postStudent method
    const handleStudSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const student: Student = {
            name: studentData.studName,
            studentnr: studentData.studNr
        }
        StudentService.postStudent(student);
    }

    return(
        <>
            <form onSubmit={handleStudSubmit} className="flex flex-col items-center border-solid bg-blue-300 w-96 h-64 rounded-2xl shadow-xl flex justify-center items-center">
                <h1 className="m-1 underline ">New Student</h1>
                {/* onChange sends the values to the state, which then is used to submit data */}
                <input name="studname" onChange={(e) => setStudentData({...studentData, studName: e.target.value})} value={studentData.studName} className="rounded h-8 m-1 text-center" placeholder="Name" />
                <input name="studentnr" onChange={(e) => setStudentData({...studentData, studNr: e.target.value})} value={studentData.studNr} className="rounded h-8 m-1 text-center" placeholder="Studentnummer" />
                <button className="bg-violet-400 w-20 rounded m-1">Submit</button>
            </form>
        </>
    );
}

export default Test;