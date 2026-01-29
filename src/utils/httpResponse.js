export const success = (data = {}, message = 'Success') => {
    return {
        status: 'success',
        message,
        data
    };
};

export const error = (message = 'Error', statusCode = 500, details = null) => {
    return {
        status: 'error',
        message,
        statusCode,
        details
    };
};
