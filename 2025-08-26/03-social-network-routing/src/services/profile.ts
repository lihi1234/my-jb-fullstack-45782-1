import axios from "axios";
import type Post from "../models/post";

class ProfileService {

    async getProfile(): Promise< Post[]> {
        // const profile = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/profile`).then<Post[]>(response=> response.json());
       const response= await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return response.data;
    }

    async remove(id: string): Promise<boolean>{
        // const deleted= await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`, {method: 'DELETE'}).then<boolean>(response=> response.json());
       const response= await axios.delete(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return response.data;
    }
}

const profileService = new ProfileService();
export default profileService;