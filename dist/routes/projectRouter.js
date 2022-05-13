"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const projectController_1 = __importDefault(require("../controllers/projectController"));
var methodOverride = require('method-override');
const projectRouter = express_1.default.Router();
projectRouter.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
projectRouter.get('/', projectController_1.default.getAllProjects);
projectRouter.get('/project/:id', projectController_1.default.getProject);
projectRouter.get('/addProject', projectController_1.default.getProjectForm);
projectRouter.post('/', projectController_1.default.addProject);
projectRouter.delete('/project/:id', projectController_1.default.deleteProject);
projectRouter.get('/project/update/:id', projectController_1.default.getUpdateForm);
projectRouter.put('/project/update/:id', projectController_1.default.updateProject);
module.exports = projectRouter;
