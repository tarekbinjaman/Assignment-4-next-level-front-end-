import api from './authService';

export const getStudentDashboard = async () => {
    const response = await api.get("/dashboard/student");
    return response?.data?.data;
}


export const getTutorDashboard = async (  search?: string,
  status?: string,
  sort?: "asc" | "desc", page = 1, limit = 5, nextPage = 1, nextLimit = 5) => {
    const response = await api.get("/dashboard/tutor", {
        params: {
            search,
            status,
            sort,
            page,
            limit,
            nextPage,
            nextLimit,
        }
    });
    return response?.data?.data;
}


export const getTutorSessions = async (search: string, status: string, sort: string, page: number, limit: number) => {
    const response = await api.get("/dashboard/tutor/", {
        params: {
            search,
            status,
            sort,
            page,
            limit,
        }
    });
    console.log("checking my session fetcihng", response?.data?.data);
    return response?.data?.data;
}