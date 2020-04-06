import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Spain from './places/Spain'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render(){
    return (
      <Router>
        <div /*style={{position: 'absolute', height: '100%', width: '100%'}}*/ className="App">
          <a><Link to="/spain">Spain</Link></a>            
        </div>




        <Switch>
          <Route path="/spain">
            <Spain/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
