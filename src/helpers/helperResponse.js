export const successResponse = (
    {
        response,
        data,
        status = 'success',
        message = 'Success',
        statusCode = 200,
    },
) => response.status(statusCode).json({
    success: true,
    status,
    message,
    data,
});

export const failResponse = (
    {
        response,
        data = null,
        status = 'fail',
        message = 'Fail',
        statusCode = 500,
    },
) => response.status(statusCode).json({
    success: false,
    status,
    message,
    data,
});
