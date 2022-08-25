"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const port = process.env.PORT || 3001;
exports.port = port;
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(routes_1.router);