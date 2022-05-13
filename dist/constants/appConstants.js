"use strict";
const httpStatusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER: 500
};
const errorTypes = {
    BAD_REQUEST: "Bad Request",
    VALIDATION: "Validation",
    INTERNAL_SERVER: "Internal Server Error"
};
const AppConstants = {
    httpStatusCodes,
    errorTypes
};
module.exports = AppConstants;
