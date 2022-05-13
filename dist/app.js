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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const connection_1 = require("./db/connection");
const projectRouter_1 = __importDefault(require("./routes/projectRouter"));
const app = (0, express_1.default)();
const PORT = config_1.config.PORT || 8000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(projectRouter_1.default);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express_1.default.static(`${__dirname}/public`));
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, connection_1.connect)();
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        });
    });
})();
//toDo napraviti views, dodati public folder i promisliti kako napraviti error handle (middleware il inekako drugacije?)
