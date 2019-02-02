import * as express from "express";
import ImageController from "../../Controllers/ImageController";
export default class UserRouter{

    public routes(app :express.Application): void { 

        app.route('/image/:imageName')
        .get(ImageController.getImage)
        

    }
}