import axios from "axios";

const USER_REST_API_URL = "http://localhost:8080/api/user";
const RESPONSE_REST_API_URL = "http://localhost:8080/api/response";

export interface Userr {
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

    postUser(userr: Userr) {
        return axios.post(USER_REST_API_URL, userr);
    }

    getResponseMessage() {
        return axios.get(RESPONSE_REST_API_URL);
    }

}

export default new UserService();

