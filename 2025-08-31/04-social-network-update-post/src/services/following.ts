import axios from "axios"
import type User from "../models/user"


class FollowingService {
    async getFollowing(): Promise<User[]> {
        const { data } = await axios<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return data
    }
    async remove(id: string): Promise<boolean> {
        const response = await axios.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${id}`)
        return response.data
    }//http://localhost:3003/allow/follows/unfollow/:id

   
}

const followingService = new FollowingService()
export default followingService