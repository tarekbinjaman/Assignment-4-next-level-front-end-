import api from "./authService";

// Get all reviews
export const getAllReviews = async () => {
  const res = await api.get("/reviews");
  return res.data;
};

// Get single review
export const getSingleReview = async (id) => {
  const res = await api.get(`/reviews/${id}`);
  return res.data;
};

// Get reviews for a tutor
export const getTutorReviews = async (tutorId) => {
  const res = await api.get(`/reviews/tutor/${tutorId}`);
  return res.data;
};

// Create review
export const createReview = async (data) => {
  const res = await api.post("/reviews", data);
  return res.data;
};

// Update review
export const updateReview = async (id, data) => {
  const res = await api.patch(`/reviews/${id}`, data);
  return res.data;
};

// Delete review
export const deleteReview = async (id) => {
  const res = await api.delete(`/reviews/${id}`);
  return res.data;
};