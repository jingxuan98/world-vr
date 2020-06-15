import React,{Component} from 'react';
import korea from '../assets/gyeongbokgung-korea.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class Korea extends Component {

    audio = new Audio("/korea.mp3")
  
    componentDidMount(){
      this.audio.play();
    }

    render(){
        return(
         <a-scene style={{position:'initial'}} >
            <a-sky src={korea} rotation="0 -130 0"></a-sky>
      
            <a-text font="kelsonsans" value="Gyeongbokgung Palace, Korea" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default Korea;