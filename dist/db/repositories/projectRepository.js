"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const projectModel_1 = require("../../models/projectModel");
const errorHandlers_1 = require("../../utils/errorHandlers");
class ProjectRepository {
    static save(project) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield projectModel_1.projectModel.create(project);
            }
            catch (error) {
                return (0, errorHandlers_1.getMongoErrors)(error);
            }
        });
    }
    static getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield projectModel_1.projectModel.find({});
        });
    }
    static getProjectById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield projectModel_1.projectModel.findById(id);
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield projectModel_1.projectModel.findByIdAndDelete(id);
        });
    }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield projectModel_1.projectModel.findByIdAndUpdate(id, data);
        });
    }
}
module.exports = ProjectRepository;
