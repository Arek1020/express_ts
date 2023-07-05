"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("./config");
var Logger_1 = __importDefault(require("./library/Logger"));
mongoose_1.default.connect(String(config_1.config.mongo.url))
    .then(function () { return Logger_1.default.info('succesfully connect to mongo'); })
    .catch(function () { return Logger_1.default.error('error connect to mongo'); });
var app = (0, express_1.default)();
app.use(express_1.default.json());
var users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];
app.get('/users', function (req, res) {
    res.json(users);
});
app.post('/users', function (req, res) {
    var newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});
app.put('/users/:id', function (req, res) {
    var id = parseInt(req.params.id);
    var aa = { name: 'df', email: 'df', id: 2 };
    var updatedUser = req.body;
    users = users.map(function (user) { return (user.id === id ? updatedUser : user); });
    res.json(aa);
});
app.delete('/users/:id', function (req, res) {
    var id = parseInt(req.params.id);
    users = users.filter(function (user) { return user.id !== id; });
    res.sendStatus(204);
});
app.listen(config_1.config.server.port, function () {
    Logger_1.default.success('Server is listening on port ' + config_1.config.server.port);
});
