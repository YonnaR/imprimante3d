import {readFileSync} from 'fs';
import JsLoader from "../utils/JsLoader";
import CssLoader from "../utils/CssLoader";

export default class Layout {

    private CSSRules:string; 
    private JSScript :string;
    private link :Array<any>;
    private title :string;
    private content :string;

    /**
     * 
     * @param link is an array of object with all the link and uri that will used into the navbar
     * @param title is a string the reffer to the head title page
     * @param content is a string with the html code of what will be display into the layout
     * use @method getLayout t        return template;    
o return new layout with content informations
     */
    constructor(link :Array<any>, title :string, content :string){
        this.link = link;
        this.title = title;
        this.content = content;
        this.CSSRules = CssLoader.getCssRules();
        this.JSScript = JsLoader.getJsScript();
    }

    private Head(title :string) :string{
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${title}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <style>
                ${this.CSSRules}
            </style>
        </head>`;
    }

    /**
     * 
     * @param content is a string with all the component you want to print.
     */
    private navbarBody(content :string) :string {
        return `<body>
                    ${this.navBar(this.link)}
                    ${content}
                    ${this.footer(this.link)}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                    <script type="text/javascript">
                        ${this.JSScript}
                    </script>
                </body>`
    }

    private noNavbarBody(content :string) :string {
        return `<body>
                    ${content}
                    ${this.footer(this.link)}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                    <script type="text/javascript">
                        ${this.JSScript}
                    </script>
                </body>`
    }

    private noFootBody(content :string) :string {
        return `<body>
                    ${this.navBar(this.link)}
                    ${content}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                    <script type="text/javascript">
                        ${this.JSScript}
                    </script>
                </body>`
    }


    private navItem( item :{name:string , uri:string}) :string{
        return `<li><a href="${item.uri}">${item.name}</a></li>`;
    }

    private navBar( navItems :Array<any> ) :string{ 
        let navlist :string = "";
        for (let i = 0 ; i < navItems.length; i++) {
            navlist += this.navItem( navItems[i] )
        }
        return `<nav>
                    <div class="nav-wrapper">
                        <a href="#!"><img class="nav-logo center" src="image/logo" alt="logo"></a>
                        <ul class="left hide-on-med-and-down">
                        ${navlist}
                        </ul>
                    </div>
                </nav>`;
    }

    private footerItem( item :{name:string , uri:string}) :string{
        return `<li><a class="grey-text text-lighten-3" href="${item.uri}">${item.name} </a></li>`;
    }
    private footer(links :Array<any>) {
        let footerlist :string = "";
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            footerlist += this.footerItem(link);
        }
        return `<footer class="page-footer">
                    <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            ${footerlist}
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="footer-copyright">
                    <div class="container">
                    © 2014 Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                    </div>
                </footer>`
    }

    /**
     * getLayout return layout with navbar and footer
     */
    public fullLayout() :string{
        return this.Head(this.title) + this.navbarBody(this.content)
    }

    /**
     * getLayout return layout with navbar and footer
     */
    public withoutNav() :string{
        return this.Head(this.title) + this.noNavbarBody(this.content)
    }

    /**
     * getLayout return layout with navbar and footer
     */
    public withoutFoot() :string{
        return this.Head(this.title) + this.noFootBody(this.content)
    }
}
