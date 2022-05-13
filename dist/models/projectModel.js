"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
;
;
const projectSchema = new mongoose_1.default.Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        default: 0
    },
    jobsDone: {
        type: String
    },
    members: {
        type: String
    },
    startDate: {
        type: Date,
        default: new Date()
    },
    endDate: {
        type: Date,
        default: new Date()
    }
});
const projectModel = mongoose_1.default.model('project', projectSchema);
exports.projectModel = projectModel;
