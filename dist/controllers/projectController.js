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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const projectRepository_1 = __importDefault(require("../db/repositories/projectRepository"));
class ProjectController {
    static getAllProjects(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield projectRepository_1.default.getAllProjects();
                res.render('index', { projects, title: 'All projects' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getProject(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const project = yield projectRepository_1.default.getProjectById(req.params.id);
                res.render('project', { project, title: 'Project details' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getProjectForm(req, res) {
        return res.render('addProject', { title: 'Add project' });
    }
    static addProject(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                yield projectRepository_1.default.save(data);
                return res.redirect('/');
            }
            catch (error) {
                res.status(error.statusCode).send(error.message);
            }
        });
    }
    static deleteProject(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield projectRepository_1.default.delete(id);
                res.json({ redirect: '/' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getUpdateForm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const project = yield projectRepository_1.default.getProjectById(id);
                res.render('updateProject', { project, title: 'Update project' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const data = req.body;
            try {
                yield projectRepository_1.default.update(id, data);
                res.redirect('/');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
module.exports = ProjectController;
