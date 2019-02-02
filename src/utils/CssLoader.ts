import { PathLike , readdirSync , readFileSync} from "fs";

export default new class CssLoader{

    private path :PathLike = "src/Assets/CSS"
    private CssRulesFiles :string[];
    private CssRules :string = "";


    private getRulesList(){
        this.CssRulesFiles = readdirSync(this.path,{encoding:"utf8"}); 
    }

    private generateRules(){
        let lastRule :string = "";
        for (let i = 0; i < this.CssRulesFiles.length; i++) {
            const element = this.CssRulesFiles[i];
            const styleChunk = readFileSync(`${this.path}/${element}`,{encoding:'utf8'});
            if (styleChunk !== lastRule){
                this.CssRules += styleChunk;
            }
            
        }

    }
    
    public getCssRules() :string{
        this.getRulesList();
        this.generateRules();
        return this.CssRules.trim()
    }

}