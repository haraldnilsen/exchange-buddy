import axios from 'axios';

const STUDENT_REST_API_URL: string = 'http://localhost:8080/api/student';

export interface Student {
    name: string;
    studentnr: string;
}

class StudentService {

    getStudents() {
        return axios.get(STUDENT_REST_API_URL);
    };

    // post student-info to the rest api URL
    postStudent(stud: Student) {
        axios.post(STUDENT_REST_API_URL, {
            name: stud.name,
            studentnr: stud.studentnr
        }, {
            headers: {
                
            }
        })
        .then(function (response) {
            console.log(response);
        })
    }

};
 
// eslint-disable-next-line
export default new StudentService();