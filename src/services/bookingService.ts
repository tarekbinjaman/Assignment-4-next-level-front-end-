import api from "./authService";

export const getAvailableSlots = async (tutorId: string, date: string) => {
    const response = await api.get("/bookings/available-slots", {
        params: {
            tutorId,
            date,
        },
    });

    return response?.data;
}