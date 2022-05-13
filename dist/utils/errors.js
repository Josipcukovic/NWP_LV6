"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.BadRequestError = exports.CustomError = exports.BaseError = void 0;
const appConstants_1 = require("../constants/appConstants");
class BaseError extends Error {
    constructor(statusCode, type, message) {
        super();
        this.statusCode = statusCode;
        this.type = type;
        this.message = message;
    }
}
exports.BaseError = BaseError;
class CustomError extends BaseError {
    constructor(statusCode, type, message) {
        super(statusCode, type, message);
    }
}
exports.CustomError = CustomError;
class BadRequestError extends BaseError {
    constructor(message) {
        super(appConstants_1.httpStatusCodes.BAD_REQUEST, appConstants_1.errorTypes.BAD_REQUEST, message);
    }
}
exports.BadRequestError = BadRequestError;
class ValidationError extends BaseError {
    constructor(message) {
        super(appConstants_1.httpStatusCodes.BAD_REQUEST, appConstants_1.errorTypes.VALIDATION, message);
    }
}
exports.ValidationError = ValidationError;
