import api from "./authService";
// category

// GET all categories
export const getAllCategories = async () => {
    const res = await api.get("/category");
    return res.data;
};

// GET single category
export const getSingleCategory = async (id) => {
    const res = await api.get(`/category/${id}`);
    return res.data;
};

// CREATE category (admin only)
export const createCategory = async (data) => {
    const res = await api.post("/category", data);
    return res.data;
};