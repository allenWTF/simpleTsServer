import * as mongoose from "mongoose";

export class Mongo {

    constructor(public port: string, dbName: string) {
        mongoose.connect("mongodb://localhost:" + port + "/" + dbName, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }, (err) => {
            if (err) {
                throw err;
            } else {
                console.log("success connect to mongo");
            }
        })
    }
}