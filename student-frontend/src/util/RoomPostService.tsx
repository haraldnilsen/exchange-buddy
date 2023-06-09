import axios from "axios";

// For searching rooms
const ROOM_GET_ALL_API_URL = "http://localhost:8080/api/roompost/all";
const ROOM_GET_API_URL = "http://localhost:8080/api/roompost";
const ROOM_GET_FILTER_API_URL = "http://localhost:8080/api/roompost/filter";

export interface RoompostToBackend {
    term: string; 
    address: string;
    city: string;
    country: string;
    active: boolean;
    roomates: string;
    bio: string;
    wifi: boolean;
    appliances: boolean;
    price: string;
    kvm: string;
    picture: string;
}

export interface RoomPost {
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
    price: string;
    kvm: string;
    picture: string;
}

class RoomPostService {

    getAllRoomPosts() {
        return axios.get(ROOM_GET_ALL_API_URL);
    }

    postRoomPost(roomPost: RoomPost) {
        return axios.post(ROOM_GET_API_URL, roomPost);
    }

    getRoomPosts() {
        return axios.get(ROOM_GET_API_URL);
    }

    searchRoomPost(roompost: RoompostToBackend) {
        return axios.post(ROOM_GET_FILTER_API_URL, roompost);
    }

    getCities() {
        return axios.get(ROOM_GET_API_URL + "/cities");
    }

    getCountries() {
        return axios.get(ROOM_GET_API_URL + "/countries");
    }

    getRoompostByMobile(mobile: string) {
        return axios.get(ROOM_GET_API_URL + "/" + "mypost", { params: { mobile: mobile } });
    }

}

export default new RoomPostService();