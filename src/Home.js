import React,{Component} from 'react';
import logo from './assets/logo/logo.png';
import './style.css';
import Spain from './places/Spain'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

{/* <a><Link to="/select">Go Now</Link></a>      */}


class Home extends Component {

  render(){
    return (
      
        <>
        <body>
          <img src="1.jpg" style={{display:'none'}} alt="" />
          <img src="2.jpg" style={{display:'none'}} alt="" />
          <img src="3.jpg" style={{display:'none'}} alt="" />
          <img src="4.jpg" style={{display:'none'}} alt="" />
          <img src="5.jpg" style={{display:'none'}} alt="" />
          
          <div className="container">
            
            <div className="filter">

              <div><img className="logo" src={logo} alt="logo"/></div>
              
                <div className="intro">
                
                  <h1 style={{fontSize:"30px"}}>TRAVELLING THE WORLD WITHOUT LEAVING YOUR ROOM.</h1>
              
              
                      <Link to="/select"><button className="btn gonow">GO NOW</button></Link>
                   </div>
                </div>
            </div>
        </body>
                

        
        
        
        </>




    );
  }
}

export default Home;
