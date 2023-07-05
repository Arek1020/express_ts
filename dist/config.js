"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var MONGO_USERNAME = process.env.MONGO_USERNAME || 'mo1175_staging';
var MONGO_PASSWORD = process.env.MONGO_PASSWORD || '!Blueform13';
var MONGO_URL = process.env.MONGO;
var SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
exports.config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
