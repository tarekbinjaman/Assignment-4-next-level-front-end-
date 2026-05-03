import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

export const loginUser = async (data) => {
    const res = await api.post("/auth/login", data);
    return res.data;
};

export const getMe = async() => {
    const res = await api.get("/user/me")
    return res.data;
};

export const logOutUser = async() => {
    await api.post("/auth/logout");
};

export const registerUser = async (data) => {
    const res = await api.post("/user/register", data);
    return res.data;
}

export default api;