"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getEnvironmentVariable(environmentVariable) {
    const requestedVariable = process.env[environmentVariable];
    if (!requestedVariable)
        throw new Error(`${environmentVariable} environment variable couldn't be found!`);
    return requestedVariable;
}
exports.config = {
    PORT: getEnvironmentVariable("PORT"),
    MONGO_ATLAS_URI: getEnvironmentVariable("MONGO_ATLAS_URI"),
};
