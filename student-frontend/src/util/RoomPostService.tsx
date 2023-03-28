import axios from "axios";

// For searching rooms
const ROOM_GET_ALL_API_URL = "http://localhost:8080/api/roompost/all";

const ROOM_GET_API_URL = "http://localhost:8080/api/roompost";
const ROOM_GET_ID_API_URL = "http://localhost:8080/api/roompost";

// For handling rooms
const ROOM_POST_API_URL = "http://localhost:8080/api/roompost";
const ROOM_UPDATE_API_URL = "http://localhost:8080/api/roompost";

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

    getRoomPosts() {
        return axios.get(ROOM_GET_API_URL);
    }

    getRoomPostById(id: number) {
        return axios.get(ROOM_GET_ID_API_URL + '/' + id);
    }

    searchRoomPost(roomPost: RoomPost) {
        return axios.post(ROOM_POST_API_URL, roomPost);
    }

}

export default new RoomPostService();