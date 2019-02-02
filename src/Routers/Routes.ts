import {Request, Response, NextFunction} from "express";
import * as ExpressSession from "express-session";
import { Application } from "express-serve-static-core";

import Layout from '../Views/Layout';
import LoginView from '../Views/LoginView';
import UserController from "../Controllers/UserController";

import CssLoader from '../utils/CssLoader';
import JsLoader from "../utils/JsLoader";

let navItem = [
    {
        name:'home',
        uri:'/home'
    },
    {
        name:'profil',
        uri:'/profil'
    },
    {
        name:'manage',
        uri:'/manage'
    }
 ]

export class Routes { 
    private CssRules :string ="";
    private JsScript :string ="";

    constructor(){
        this.CssRules = CssLoader.getCssRules();
        this.JsScript = JsLoader.getJsScript();
    }

    public routes(app :Application): void {   
        //home '/' route
        app.route('/')
        .get((req: Request, res: Response) => {   
            const logginView = new LoginView();
            const loginLayout = new Layout(navItem,'Bienvenue sur le panel Admin', logginView.registerForm() )
            res.status(200).send(loginLayout.withoutNav())
        })

        app.route('/login')
        .get((req: ExpressSession.Request, res: Response) => { 
            if (req.session['auth'] !== 'true'){
                console.log(req.session);
                res.status(200).render('LoginView', {
                    pageTitle:'Connectez vous pour acceder au outils Administateurs',
                    linkArr:navItem,
                    CssRules: this.CssRules,
                    JsScript:this.JsScript
                })
            }
            else{
                res.redirect('/home');
            }  
        });
        
        app.route('/connection')
        .get(UserController.getAuth)

        app.route('/disconnection')
        .get((req : ExpressSession.Request , res :Response)=>{
            req.session["auth"] = false;
            res.redirect('/login')
        })
    }
}

export class AdminRouter { 
    private CssRules :string ="";
    private JsScript :string ="";
    
    constructor(){
        this.CssRules = CssLoader.getCssRules();
        this.JsScript = JsLoader.getJsScript();
    }
    public routes(app:Application): void {   

        app.route('/home')
        .get((req: ExpressSession.Request , res: Response) => {
            if (req.session['auth'] === 'true'){
                res.render('HomeView',{
                    pageTitle:'Home page',
                    linkArr:navItem,
                    CssRules: this.CssRules,
                    JsScript: this.JsScript,
                    isConnected : true
                });    
            }
            else{
                res.redirect('/login');
            }
        })

        app.route('/sign-in')
        .get((req: ExpressSession.Request , res: Response , next : NextFunction) => {
            if (req.session['auth'] === 'true'){
                console.log(req.session);
                res.render('RegisterView',{
                    pageTitle:'Nouvel utilisateur',
                    CssRules: this.CssRules,
                    JsScript: this.JsScript,
                    isConnected : true
                });    
            }
            else{
                res.redirect('/login');
            }
        })

        app.route('/manage')
        .get((req: ExpressSession.Request , res: Response , next : NextFunction) => {
            if (req.session['auth'] === 'true'){
                console.log(req.session);
                res.send('hello World');    
            }
            else{
                res.redirect('/login');
            }
        })
    }

}

export class ErrorRoute{
    private CssRules :string = "";
    private JsScript :string = "";
    
    constructor(){
        this.CssRules = CssLoader.getCssRules();
        this.JsScript = JsLoader.getJsScript();
    }
    public routes(app :Application){
        //hold 404 route
       /*  app.use(function(req, res, next){
            res.status(404).render('NotFoundView' , {
                pageTitle:"Erreur 404, lien cassé ou introuvable",
                linkArr:navItem,
                CssRules: this.CssRules,
            });
        }); */

    }

}