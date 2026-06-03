import api from './authService';

// Create availability
export const createAvailability = async(data: {
    tutorId: string;
    day: string;
    startTime: string;
    endTime: string;
}) => {
    const res = await api.post("/availability", data);
    return res.data;
}


// get tutor availability
export const getAvailability = async (tutorId: string) => {
    const res = await api.get(`/availability/${tutorId}`);
    return res.data;
}

// update availability

export const updateAvailability = async (
    id: string,
    data: {
        day?: string;
        startTime?: string;
        endTime: string;
    }
) => {
    const res = await api.patch(`/availability/${id}`, data);
    return res.data;
}

// Delete availability
export const deleteAvailability = async (id: string) => {
    const res = await api.delete(`/availability/${id}`);

    return res.data;
}