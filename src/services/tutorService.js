import api from "./authService";
// Get tutor profile by ID
export const getTutorProfile = async (id) => {
  const res = await api.get(`/tutors/${id}`);
  return res.data;
};

// Get all tutor profiles
export const getAllTutors = async ({category, sort, search, availableDays}) => {
  const res = await api.get("/tutors", {
    params: {
      category,
      sort,
      search,
      availableDays: availableDays?.join(",")
    }
  });
  return res.data;
};

// get single tutor data
export const getSingleTutorProfile = async (id) => {
  const res = await api.get(`/tutors/${id}`);
  return res.data;
}


// Create tutor profile
export const createTutorProfile = async (data) => {
  const res = await api.post("/tutors", data);
  return res.data;
};

// Update tutor profile
export const updateTutorProfile = async (id, data) => {
  const res = await api.patch(`/tutors/${id}`, data);
  return res.data;
};


// Delete tutor profile
export const deleteTutorProfile = async (id) => {
  const res = await api.delete(`/tutors/${id}`);
  return res.data;
};