import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'fe6f47e1-85b3-410d-a710-52547d7fe962'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    isAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    setFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    setUnfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}
