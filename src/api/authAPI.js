import samuraiInstance from "./samuraiInstance";

export const authAPI = {
    async authorize() {
        return await samuraiInstance.get("auth/me").then(response => response.data);
    },

    async logIn(formData) {
        let requestObj = { ...formData, captcha: false };
        return await samuraiInstance.post("auth/login", requestObj).then(response => response.data);
    },
    async logOut() {
        return await samuraiInstance.delete("auth/login").then(response => response.data);
    }

}