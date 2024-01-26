import samuraiInstance from "./samuraiInstance";

export const usersAPI = {
    getUsers(currentPageNumber = 1, pageSize = 10) {
        return samuraiInstance.get(`users?page=${currentPageNumber}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return samuraiInstance.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow(userId) {
        return samuraiInstance.delete(`follow/${userId}`).then(response => response.data);
    }
}