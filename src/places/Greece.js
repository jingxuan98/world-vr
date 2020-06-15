import React,{Component} from 'react';
import greece from '../assets/veria-greece.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class Greece extends Component {

    audio = new Audio("/greece.mp3")
  
    componentDidMount(){
      this.audio.play();
    }

    render(){
        return(
         <a-scene style={{position:'initial'}} >
            <a-sky src={greece} rotation="0 -130 0"></a-sky>
      
            <a-text font="kelsonsans" value="Peach Trees Orchard, Greece" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default Greece;