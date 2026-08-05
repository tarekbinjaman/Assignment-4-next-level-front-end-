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
export const getTutorReviews = async (tutorId: string,  sort: string, search: string, rating: number, page: number, limit: number) => {
  const res = await api.get(`/reviews/tutor/${tutorId}`, {
    params: {
      sort,
      search,
      rating,
      page,
      limit
    }
  });
  return res.data;
};

type CreateReviewPayload = {
  bookingId: string;
  tutorId: string;
  rating: number;
  comment: string;
};

// Create review
export const createReview = async (data: CreateReviewPayload) => {
  const res = await api.post("/reviews", data);
  return res.data;
};

export const getBookingReview = async (bookingId: string) => {
  const res = await api.get(`/reviews/booking/${bookingId}`);
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