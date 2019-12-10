"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var animeRoutes = express_1.Router();
animeRoutes.post('/', function (req, res) {
    res.json({
        message: 'crear anime listo'
    });
});
exports.default = animeRoutes;
