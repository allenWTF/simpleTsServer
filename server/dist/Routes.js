"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app, MongoDB) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        // Allow Cross-Origin access to this server. By default all origins are accepted
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            next();
        });
        app.get('/api/getTest', function (req, res) {
            res.status(200).send("/GET check is good!");
        });
    };
    return Routes;
}());
exports.Routes = Routes;
