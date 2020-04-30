import {Request, Response, Application} from "express";
import {Mongo} from "./Mongo";
import * as bodyParser from "body-parser";

export class Routes {
    public routes(app: Application, MongoDB: Mongo): void {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        // Allow Cross-Origin access to this server. By default all origins are accepted
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            next();
        });

        app.get('/api/getTest', (req, res) => {
            res.status(200).send("/GET check is good!")
        });
    }
}