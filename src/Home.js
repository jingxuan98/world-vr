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


class Home extends Component {

  render(){
    return (
      
        <>
          <a><Link to="/select">Go Now</Link></a>            
        </>

    );
  }
}

export default Home;
