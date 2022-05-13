"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoErrors = void 0;
const appConstants_1 = require("../constants/appConstants");
const errors_1 = require("./errors");
function getMongoErrors(error) {
    if (error.message.toLowerCase().includes("validation failed")) {
        let errors = {};
        Object.values(error.errors).forEach((properties) => {
            errors[properties.path] = properties.message;
        });
        throw new errors_1.ValidationError(errors);
    }
    throw new errors_1.CustomError(appConstants_1.httpStatusCodes.INTERNAL_SERVER, error.name, error.message);
}
exports.getMongoErrors = getMongoErrors;
