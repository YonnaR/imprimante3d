
export default class LoginView{

    constructor(){

    }
    public registerForm() :string{
        return `<div class="loginContainer">
                    <div class="row">
                        <form class="col s12" id="reg-form">
                        <div class="row">
                            <div class="input-field col s6">
                            <input id="first_name" type="text" class="validate" required>
                            <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate" required>
                            <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input id="email" type="email" class="validate" required>
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input id="password" type="password" class="validate" minlength="6" required>
                            <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">                    
                            <div class="input-field col s12">
                            <button class="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register
                                <i class="material-icons right">done</i>
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    <a title="Login" class="ngl btn-floating btn-large waves-effect waves-light red"><i class="material-icons">input</i></a>
                    </div>`
    }
    public loginForm():string{
        return `<main>
                    <center>
                    <div class="section"></div>
                
                    <h5 class="indigo-text">Veuillez vous authentifier pour accéder a votre panel</h5>
                    <div class="section"></div>
                
                    <div class="loginContainer">
                        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
                
                        <form class="col s12" method="get" action="/connection">
                            <div class='row'>
                            <div class='col s12'>
                            </div>
                            </div>
                
                            <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type='email' name='email' id='email' />
                                <label for='email'>Enter your email</label>
                            </div>
                            </div>
                
                            <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type='password' name='password' id='password' />
                                <label for='password'>Enter your password</label>
                            </div>
                            <label style='float: right;'>
                                                <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
                                            </label>
                            </div>
                
                            <br />
                            <center>
                            <div class='row'>
                                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
                            </div>
                            </center>
                        </form>
                        </div>
                    </div>
                    <a href="#!">Create account</a>
                    </center>
                
                    <div class="section"></div>
                    <div class="section"></div>
                </main>`
    }
}