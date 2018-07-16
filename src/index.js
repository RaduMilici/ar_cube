import Updater from './updater';
import Cube from './prefabs/cube';
import App from './app';
import Raycaster from './raycaster';
import { AmbientLight } from 'three';
const appSettings = {
  selector: '#webgl',
  width: window.innerWidth,
  height: window.innerHeight
};

const { camera, renderer, scene, container } = new App(appSettings);
const raycaster = new Raycaster({ container, camera });

const updater = new Updater({ renderer, scene, camera });
const cube = new Cube();

camera.position.set(0, 0, 5);
renderer.setClearColor(0x000000, 1);

const light = new AmbientLight( 0x404040 );
scene.add(light);
scene.add(cube);
updater.add(cube);
raycaster.add(cube);
updater.start();

window.raycaster = raycaster;
