import api from './authService';
import { Availability } from '../types/availability';
import { ApiResponse } from '../types/api';

// Create availability
export const createAvailability = async(data: {
    day: string;
    startTime: string;
    endTime: string;
}): Promise<Availability> => {
    const res = await api.post<ApiResponse<Availability>>("/availability", data);
    return res.data.data;
}


// get tutor availability
export const getAvailability = async (): Promise<Availability[]> => {
    const res = await api.get<ApiResponse<Availability[]>>(`/availability`);
    return res.data.data;
}

// update availability

export const updateAvailability = async (
    id: string,
    data: {
        day?: string;
        startTime?: string;
        endTime: string;
    }
): Promise<Availability> => {
    const res = await api.patch<ApiResponse<Availability>>(`/availability/${id}`, data);
    return res.data.data;
}

// Delete availability
export const deleteAvailability = async (id: string) => {
    const res = await api.delete(`/availability/${id}`);

    return res.data;
}