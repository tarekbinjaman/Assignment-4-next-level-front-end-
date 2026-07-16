import api from './authService';

export const getStudentDashboard = async () => {
    const response = await api.get("/dashboard/student");
    return response?.data?.data;
}


export const getTutorDashboard = async () => {
    const response = await api.get("/dashboard/tutor");
    return response?.data?.data;
}