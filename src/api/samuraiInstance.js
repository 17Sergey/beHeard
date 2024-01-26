import axios from "axios";

const samuraiInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    "API-KEY": "ba04cda0-789b-437b-9a66-17f72220faf2",
})

export default samuraiInstance;