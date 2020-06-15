import React,{Component} from 'react';
import germany from '../assets/monreal-germany.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class Germany extends Component {

    audio = new Audio("/germany.mp3")
  
    componentDidMount(){
      this.audio.play();
    }

    render(){
        return(
         <a-scene style={{position:'initial'}} >
            <a-sky src={germany} rotation="0 -130 0"></a-sky>
      
            <a-text font="kelsonsans" value="Monreal, Germany" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default Germany;