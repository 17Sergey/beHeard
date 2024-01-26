import samuraiInstance from "./samuraiInstance";

export const profileAPI = {
    getProfile(userId) {
        return samuraiInstance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return samuraiInstance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return samuraiInstance.put("profile/status/", { status });
    }
} 