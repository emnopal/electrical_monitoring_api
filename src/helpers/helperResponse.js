export const successResponse = (
    {
        response,
        data,
        status = 'success',
        message = 'Success',
        statusCode = 200,
    },
) => {
    return response.status(statusCode).json({
        success: true,
        status: status,
        message: message,
        data: data,
    });
};

export const failResponse = (
    {
        response,
        data = null,
        status = 'fail',
        message = 'Fail',
        statusCode = 500,
    },
) => {
    return response.status(statusCode).json({
        success: false,
        status: status,
        message: message,
        data: data,
    });
};
