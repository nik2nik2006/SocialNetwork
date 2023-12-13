import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5059f134-7c45-46b5-be16-0963871efb2b"
    }
});

export const usersAPI = {
    getUsers(currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    getFollow(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => {
            return response.data
        })
    },
};

export const headerAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    }
};
