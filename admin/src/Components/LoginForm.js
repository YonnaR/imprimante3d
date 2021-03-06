import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isAuth : props.isAuth,
            email:"",
            pass:""
        }
    }
  
  render() {
    const { email , pass , isAuth } = this.state;
    if(isAuth) { return ( <Redirect to="/home"/> )}
    return (
      <section class="hero is-success is-fullheight">
      <div class="hero-body">
          <div class="container has-text-centered">
              <div class="column is-4 is-offset-4">
                  <h3 class="title has-text-grey">Login</h3>
                  <p class="subtitle has-text-grey">Please login to proceed.</p>
                  <div class="box">
                      <figure class="avatar">
                          <img src="https://placehold.it/128x128"/>
                      </figure>
                          <div class="field">
                              <div class="control">
                                  <input class="input is-large" type="email" placeholder="Your Email" value={email} onChange={(e)=>this.setState({email:e.target.value})} />
                              </div>
                          </div>

                          <div class="field">
                              <div class="control">
                                  <input class="input is-large" type="password" placeholder="Your Password" value={pass} onChange={(e)=>this.setState({pass:e.target.value})}/>
                              </div>
                          </div>
                          <div class="field">
                              <label class="checkbox">
                              <input type="checkbox"/>
                              Remember me
                            </label>
                          </div>
                          <button class="button is-block is-info is-large is-fullwidth" onClick={()=>this.props.connect(email , pass)}>Login</button>
                  </div>
                  <p class="has-text-grey">
                      <a href="../">Sign Up</a>
                      <a href="../">Forgot Password</a>
                      <a href="../">Need Help?</a>
                  </p>
              </div>
          </div>
      </div>
      </section>
    )
  }
}
