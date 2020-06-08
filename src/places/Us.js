import React,{Component} from 'react';
import us from '../assets/fountaingrove-us.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class US extends Component {

    render(){
        return(
         <a-scene style={{position:'initial'}} >
            <a-sky src={us} rotation="0 -130 0"></a-sky>
      
            <a-text font="kelsonsans" value="Fountaingrove, US" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default US;
