import { readdir , readFileSync } from "fs"
import { Request, Response } from 'express';

export default new class ImageController{

    public addImage (req: Request, res: Response) {  

    }

    public getImage (req: Request, res: Response) {
        let imageName = req.params.imageName;
        readdir('src/Assets/Images',(err , files)=>{
            for (let i = 0; i < files.length; i++) {
                let fileName = files[i].split('.')[0];
                let fileExt = files[i].split('.')[1]
                if(imageName === fileName){
                    let image = readFileSync(`src/Assets/Images/${fileName}.${fileExt}`);
                    res.set('Content-Type',`image/${fileExt}`);
                    res.status(200).send(image);
                    return true;
                }
            }
            res.status(404).redirect('/404');
        })
        
    }

    public deleteImage (req :Request, res :Response) {           

    }  
    
}