import api from "./authService";

export const getTutorSessionDetails = async (id: string) => {
  const response = await api.get(`/dashboard/tutor/sessions/${id}`);
  return response.data.data;
};