"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    var _a;
    _a = Logger;
    Logger.log = function (args) { return _a.info(args); };
    Logger.info = function (args) { return console.log(chalk_1.default.blue("[".concat(new Date().toLocaleString(), "] [INFO]")), typeof args === 'string' ? chalk_1.default.blueBright(args) : args); };
    Logger.warning = function (args) { return console.log(chalk_1.default.yellow("[".concat(new Date().toLocaleString(), "] [WARN]")), typeof args === 'string' ? chalk_1.default.yellowBright(args) : args); };
    Logger.error = function (args) { return console.log(chalk_1.default.red("[".concat(new Date().toLocaleString(), "] [ERROR]")), typeof args === 'string' ? chalk_1.default.redBright(args) : args); };
    Logger.success = function (args) { return console.log(chalk_1.default.green("[".concat(new Date().toLocaleString(), "] [LOGGER]")), typeof args === 'string' ? chalk_1.default.greenBright(args) : args); };
    return Logger;
}());
exports.default = Logger;
