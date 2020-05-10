import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Selection from './Selection.js'
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render(){
    return (
   
      <div>
        <Switch >
          <Route exact path ='/' component={Home}/>
          <Route exact path="/select" component={Selection} />
        </Switch>
      </div>

  
    );
  }
}

export default App;
