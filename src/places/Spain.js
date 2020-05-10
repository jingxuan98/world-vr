import React,{Component} from 'react';
import spain from '../assets/mallocra-spain.jpg'
import voice from '../assets/voice-guide.png'
import 'aframe';

class Spain extends Component {

    render(){
        return(
         <a-scene style={{position:'initial'}} >
            {/* <a-sky src={spain} rotation="0 -130 0"></a-sky> */}
            <a-assets>
                <img id="my-image" src={voice}  crossorigin="anonymous"/>
            </a-assets>

            <a-image src="#my-image"  width="16" height="9"></a-image>
      
            <a-text font="kelsonsans" value="Mallocra, Spain" width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0"></a-text>
          </a-scene>
        )
    }
}

export default Spain;