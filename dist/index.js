"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('./config/config');
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var server_1 = require("./classes/server");
var fileUpload = require("express-fileupload");
var routes_1 = __importDefault(require("./routes"));
var mongoose_1 = __importDefault(require("mongoose"));
// const server = Server.init( Number(process.env.PORT) ); 
var server = server_1.Server.instance;
// Body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//fileuploader
server.app.use(fileUpload());
//configurar CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
//rutas de mi aplicacion
server.app.use(routes_1.default);
//conectar DB
mongoose_1.default.connect(String(process.env.URLDB), { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, function (err) {
    if (err)
        throw err;
    console.log('Base de datos ONLINE');
});
//levantar expres
server.start(function () {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
});
