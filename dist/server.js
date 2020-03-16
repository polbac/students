"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var next = require('next');
var makeConnection = require('./connection').makeConnection;
var port = parseInt(process.env.PORT, 10) || 3000;
var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev: dev });
var handle = app.getRequestHandler();
Promise.resolve().then(function () { return __importStar(require("reflect-metadata")); });
app.prepare().then(function () {
    var server = express();
    var connection = makeConnection()
        .then(function () {
        console.log("> DATABASE: Connected succefull \uD83D\uDC4C");
    })
        .catch(function (err) {
        console.log('> DATABASE: can\'t connect 👎', err);
    });
    server.all('*', function (req, res) {
        req.connection = connection;
        return handle(req, res);
    });
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Students ready on http://localhost:" + port);
    });
});
exports.default = undefined;
