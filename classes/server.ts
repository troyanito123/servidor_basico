import express from 'express';

export class Server {
    private static _instance: Server;
    public app: express.Application;
    public port: number;

    private constructor(){
        this.app = express();
        this.port = Number(process.env.PORT);
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    start(callback: Function) {
        this.app.listen(this.port, callback());
    }
}