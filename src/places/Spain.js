import React,{Component} from 'react';
import spain from '../assets/mallorca-spain.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class Spain extends Component {

    audio = new Audio("/spain.mp3")
  
    componentDidMount(){
      this.audio.play();
    }
    
    render(){
        return(
         <a-scene style={{position:'initial'}} >
            <a-sky src={spain} rotation="0 -130 0"></a-sky>
      
            <a-text font="kelsonsans" value="Mallorca, Spain" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default Spain;