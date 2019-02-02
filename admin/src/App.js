import React, { Component } from 'react';
import './Assets/Css/App.css';
import AppRouter from './Router';
import axios from "axios";

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      isAuth: false,
    }
  }

  connect = ( mail , pass )=>{
    let uri = `/connection?email=${mail}&password=${pass}`
    axios.get(uri)
    .then(function (response) {
      axios.defaults.headers.common['Authentification'] = response.data;
      this.setState({
        isAuth:true
      }) 
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  disconnect = ()=>{
    this.setState((state)=>{
      return({
        isAuth : false,
      })
    })
  } 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppRouter auth={this.state.isAuth} connect={this.connect} disconnect={this.disconnect}/>
        </header>
      </div>
    );
  }
}

export default App;
