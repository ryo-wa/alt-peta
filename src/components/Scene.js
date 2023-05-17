import 'aframe';
import {Entity, Scene} from 'aframe-react';

export default function PetaScene(props) {
    return (
        <Scene>
          <Entity primitive="a-camera" gps-camera='gpsMinDistance: 5' rotation-render/>
          <Entity geometry={{primitive: 'box'}} material={{color: '#feb25e'}} position={{x: -2, y: 0, z: -5}}/>
          <Entity geometry={{primitive: 'box'}} material={{color: '#ff5685'}} position={{x: 2, y: 0, z: -5}} gps-new-entity-place="latitude: 33.955193; longitude: 130.919529"/>
          <Entity geometry={{primitive: 'box'}} material={{color: '#6ac7e6'}} position={{x: 0, y: 0, z: -5}}/>
          <Entity light={{type: 'ambient'}}/>
        </Scene>
      );
  
}
