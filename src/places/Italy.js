import React,{Component} from 'react';
import italy from '../assets/momostaircase-italy.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class Italy extends Component {

    audio = new Audio("/italy.mp3")
  
    componentDidMount(){
      this.audio.play();
    }

    render(){
        return(
         <a-scene style={{position:'initial'}} >
            <a-sky src={italy} rotation="0 -130 0"></a-sky>
      
            <a-text font="kelsonsans" value="Momo Staircase, Italy" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default Italy;