import api from './authService';

export const getStudentDashboard = async () => {
    const response = await api.get("/dashboard/student");
    return response.data.data;
}