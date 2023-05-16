import 'aframe';

export default function PetaScene(props) {
    return (
<a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true'>
    <a-camera gps-new-camera='gpsMinDistance: 5' rotation-reader></a-camera>
    <a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: 33.95535027392192; longitude: 130.9193714213367" scale="10 10 10"></a-entity>
</a-scene>
      );
  
}
