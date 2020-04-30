"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Mongo = /** @class */ (function () {
    function Mongo(port, dbName) {
        this.port = port;
        mongoose.connect("mongodb://localhost:" + port + "/" + dbName, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log("success connect to mongo");
            }
        });
    }
    return Mongo;
}());
exports.Mongo = Mongo;
