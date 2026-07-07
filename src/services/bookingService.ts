import api from "./authService";



export const createBooking = async(bookingData: {
      tutorId: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  notes?: string;
}) => {
    const response = await api.post("/booking", bookingData);
    return response.data;
}

export const getAvailableSlots = async (tutorId: string, date: string) => {
    const response = await api.get("/booking/available-slots", {
        params: {
            tutorId,
            date,
        },
    });

    return response?.data;
}

