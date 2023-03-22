import axios from 'axios';

const STUDENT_REST_API_URL: string = 'http://localhost:8080/api/student';

class StudentService {

    getStudents() {
        return axios.get(STUDENT_REST_API_URL);
    }

}

export default new StudentService();