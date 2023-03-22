import axios from "axios";

const USER_REST_API_URL = "http://localhost:8080/api/user";

export interface User {
    mobile: string;
    fname: string;
    lname: string;
    fdate: string;
    profilepic: string;
    sex: string;
    salt: string;
    password: string;
}

class UserService {

    getUsers() {
        return axios.get(USER_REST_API_URL);
    };

    postUser(user: User) {
        return axios.post(USER_REST_API_URL, user);
    }
}

export default new UserService();

