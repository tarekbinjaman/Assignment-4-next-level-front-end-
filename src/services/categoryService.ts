import api from "./authService";
import { Category, CreateCategoryPayload } from "../types/category";
import { ApiResponse } from "../types/api";




// GET all categories
export const getAllCategories = async (): Promise<Category[]> => {
    const res = await api.get<ApiResponse<Category[]>>("/category");
    return res.data.data;
};

// GET single category
export const getSingleCategory = async (id: string): Promise<Category> => {
    const res = await api.get<ApiResponse<Category>>(`/category/${id}`);
    return res.data.data;
};

// CREATE category (admin only)
export const createCategory = async (data: CreateCategoryPayload): Promise<Category> => {
    const res = await api.post<ApiResponse<Category>>("/category", data);
    return res.data.data;
};