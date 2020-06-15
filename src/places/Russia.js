import React,{Component} from 'react';
import russia from '../assets/yaroslavl-russia.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class Russia extends Component {

    audio = new Audio("/Russia.mp3")
  
    componentDidMount(){
      this.audio.play();
    }

    render(){
        return(
         <a-scene style={{position:'initial'}} >
            <a-sky src={russia} rotation="0 -130 0"></a-sky>
      
            <a-text font="kelsonsans" value="Church of Elijah The Prophet, Russia" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default Russia;