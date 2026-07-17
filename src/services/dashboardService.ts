import api from "./authService";

export const getStudentDashboard = async () => {
  const response = await api.get("/dashboard/student");
  return response?.data?.data;
};

export const getTutorDashboard = async (
  search: string,
  status: string,
  sort: string,
) => {
  const response = await api.get("/dashboard/tutor", {
    params: {
      search,
      status,
      sort,
    },
  });
  return response?.data?.data;
};
