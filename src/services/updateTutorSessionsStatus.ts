import api from "./authService"

export const updateTutorSessionsStatus = async (sessionId: string, status: string) => {
    const response = await api.patch(`/dashboard/tutor/sessions/${sessionId}`,
        {
            status,
        }
    );

    return response.data.data
};