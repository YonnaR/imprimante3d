import { PathLike , readdirSync , readFileSync} from "fs";

export default new class JsLoader{

    private path :PathLike = 'src/Assets/JS';
    private JsScriptFiles :string[];
    private JsScript :string = "";


    private getScriptList(){
        this.JsScriptFiles = readdirSync(this.path,{encoding:"utf8"});
    }

    private generateScript(){
        let lastScript :string = "";
        for (let i = 0; i < this.JsScriptFiles.length; i++) {
            const element = this.JsScriptFiles[i];
            const scriptChunk = readFileSync(`${this.path}/${element}`,{encoding:'utf8'});
            if (scriptChunk !== lastScript){
                this.JsScript += scriptChunk;
            } 
        }
    }
    
    public getJsScript() :string{
        this.getScriptList();
        this.generateScript();
        return this.JsScript.trim()
    }

}