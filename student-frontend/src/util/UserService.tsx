import axios from "axios";

const USER_REST_API_URL = "http://localhost:8080/api/user";
const RESPONSE_REST_API_URL = "http://localhost:8080/api/response";
const LOGIN_REST_API_URL = "http://localhost:8080/api/login";
const LOGIN_RESPONSE_REST_API_URL = "http://localhost:8080/api/response2";

const USERPOST_REST_API_URL = "http://localhost:8080/api/userpost";

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

export interface UserrPost {
    term: string;
    city: string;
    country: string;
    active: boolean;
    bio: string;
    minPrice: string;
    maxPrice: string;
}


class UserService {

    // For registering a new user
    getUsers() {
        return axios.get(USER_REST_API_URL);
    };

    postUser(userr: Userr) {
        return axios.post(USER_REST_API_URL, userr);
    }

    getResponseMessage() {
        return axios.get(RESPONSE_REST_API_URL);
    }

    // For logging in
    loginUser(userr: Userr) {
        return axios.post(LOGIN_REST_API_URL, userr);
    }

    getLoginResponseMessage() {
        return axios.get(LOGIN_RESPONSE_REST_API_URL);
    }

    // For Userpost page
    getAllUsers() {
        return axios.get(USERPOST_REST_API_URL + "/all");
    }

    getUserCities() {
        return axios.get(USERPOST_REST_API_URL + "/cities");
    }

    getUserCountries() {
        return axios.get(USERPOST_REST_API_URL + "/countries");
    }

    getFilteredUsers() {
        return axios.get(USERPOST_REST_API_URL + "/filter");
    }

    searchUser(userr: Userr) {
        return axios.post(USERPOST_REST_API_URL, userr);
    }

}

export default new UserService();

