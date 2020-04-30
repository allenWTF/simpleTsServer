import * as express from "express";
import {Routes} from "./Routes";
import {Mongo} from "./Mongo";
import * as path from "path";

class NetworkLayer {

    public app: express.Application;
    public MongoDB : Mongo = new Mongo("27017", "put your db name here");
    public routesMap: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routesMap.routes(this.app, this.MongoDB);
    }

    private config(): void {
        //example of function
    }

}

export default new NetworkLayer().app;