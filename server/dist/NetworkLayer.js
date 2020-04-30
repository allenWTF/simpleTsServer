"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Routes_1 = require("./Routes");
var Mongo_1 = require("./Mongo");
var NetworkLayer = /** @class */ (function () {
    function NetworkLayer() {
        this.MongoDB = new Mongo_1.Mongo("27017", "put your db name here");
        this.routesMap = new Routes_1.Routes();
        this.app = express();
        this.config();
        this.routesMap.routes(this.app, this.MongoDB);
    }
    NetworkLayer.prototype.config = function () {
        //example of function
    };
    return NetworkLayer;
}());
exports.default = new NetworkLayer().app;
