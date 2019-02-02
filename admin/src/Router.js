import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import LoginForm from './Components/LoginForm';
const Loggin = () => <h2>Loggin</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = ( props )=>{
    
    let Index = () => <LoginForm connect={props.connect} isAuth={props.auth}/>;

    return(
        <Router>
            <div>
                {props.auth?<Navbar connect={props.connect} disconnect={props.disconnect}/>:null}
                <div class="columns is-fullheight">
                    {props.auth?<Sidebar/>:null}
                    <div class="column is-main-content">
                        <Switch>
                            <Route path="/" exact component={Index} />
                            <Route path="/login" component={Loggin} />
                            <Route path="/users/" component={Users} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;