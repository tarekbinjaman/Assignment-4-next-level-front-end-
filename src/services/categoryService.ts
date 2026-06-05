import api from "./authService";
// category

export interface Category {
    id: string;
    name: string;
}

export interface CreateCategoryPayload {
    name: string;
}



// GET all categories
export const getAllCategories = async (): Promise<Category[]> => {
    const res = await api.get<Category[]>("/category");
    return res.data;
};

// GET single category
export const getSingleCategory = async (id: string): Promise<Category> => {
    const res = await api.get<Category>(`/category/${id}`);
    return res.data;
};

// CREATE category (admin only)
export const createCategory = async (data: CreateCategoryPayload): Promise<Category> => {
    const res = await api.post<Category>("/category", data);
    return res.data;
};