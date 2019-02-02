import * as mongoose from 'mongoose';
import * as express from "express";
import { Request } from "express-session";
import { generate } from 'password-hash';

import {UserSchema} from '../../Models/UserModel';
import UserControler from '../../Controllers/UserController';

const User = mongoose.model('user', UserSchema);

export default class UserRouter{

    public routes(app :express.Application): void { 

        // '/user' route 
        app.route('/user')
        .get((req: Request, res: express.Response, next: express.NextFunction) => {
            // middleware
            if (req.session['auth'] === 'true'){
                next();                       
                }
            else{
                res.redirect('/login');
            }
        },UserControler.getUsers)   
        
        // POST endpoint
        .post((req: Request, res: express.Response, next: express.NextFunction) => {
            // middleware
            if (req.session['auth'] === 'true'){
                req.body.password = generate(req.body.password)
                next();                       
                }
            else{
                res.redirect('/login');
            }
        }, UserControler.addNewUser);

        
        // User detail
        app.route('/user/:userId')
        // get specific User
        .get((req: Request, res: express.Response, next: express.NextFunction) => {
            // middleware
            if (req.session['auth'] === 'true'){
                next();                       
                }
            else{
                res.redirect('/login');
            }
        },UserControler.getUserWithID)
        // change data User
        .put((req: Request, res: express.Response, next: express.NextFunction) => {
            // middleware
            if (req.session['auth'] === 'true'){
                next();                       
                }
            else{
                res.redirect('/login');
            }
        },UserControler.updateUser)
        // delete User
        .delete((req: Request, res: express.Response, next: express.NextFunction) => {
            // middleware
            if (req.session['auth'] === 'true'){
                next();                       
                }
            else{
                res.redirect('/login');
            }
        },UserControler.deleteUser)

    }
}