export const createAPIResponse = (response,message,status,data) => {

    const getStateResponse = (statusCode) => {
        return statusCode.toString().startsWith('2');
    }

    response.status(status).json({
        state: getStateResponse(status),
        message: message,
        data: data || null
    });
}