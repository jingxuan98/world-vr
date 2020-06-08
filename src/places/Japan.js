import React,{Component} from 'react';
import japan from '../assets/kishimojin-japan.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class Japan extends Component {

    render(){
        return(
         <a-scene style={{position:'initial'}} >
            <a-sky src={japan} rotation="0 -130 0"></a-sky>
      
            <a-text font="kelsonsans" value="Kishimojin Temple, Japan" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default Japan;