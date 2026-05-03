import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

export const getMe = async() => {
    const res = await api.get("/user/me")
    return res.data;
};

export const logOutUser = async() => {
    await api.post("/auth/logout");
};

export default api;