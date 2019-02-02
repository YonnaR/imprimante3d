import * as express from "express";
import * as ExpressSession from "express-session";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";
import * as path from "path"
import { DB_URL } from './utils/env';


import { Routes , AdminRouter , ErrorRoute } from "./Routers/Routes";
import UserRouter from './Routers/Api/UserRouter';
import ImageRouter from './Routers/Api/ImageRouter';
import { Router } from "express-serve-static-core";

class App {

    //public declarations
    public app: express.Application;
    public mongoUrl: string = DB_URL;
    public routePrv: Routes = new Routes();
    public LoginRoute :AdminRouter= new AdminRouter();
    public ApiUser :UserRouter= new UserRouter();
    public ImageRouter :ImageRouter= new ImageRouter();
    public ErrorRoute :ErrorRoute= new ErrorRoute();

    constructor() {
        //init app
        this.app = express();
        //launch config function
        this.config();
        //setup database connection
        this.mongoSetup(); 

        //use pug template engine
        this.app.set('view engine', 'pug');
        this.app.set('views', path.join(__dirname, 'Views'));
        //use custom router
        this.ImageRouter.routes(this.app);
        this.ApiUser.routes(this.app);      
        this.routePrv.routes(this.app);  
        this.LoginRoute.routes(this.app); 
        this.ErrorRoute.routes(this.app);    
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //support cross server acces
        this.app.use(cors());
        //init session storage
        this.app.set('trust proxy', 1);  
        
        this.app.use(ExpressSession({
            "secret":"ssshhhhh",
            "resave":true,
            "saveUninitialized": false
        }))
    }

    private mongoSetup(): void{
        //mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl,{useNewUrlParser:true});  
    }
}

export interface Request extends Express.Request {
    session: [any];
}

export default new App().app;