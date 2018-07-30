import Updater from './updater';
import Cube from './prefabs/cube';
import App from './app';
import Raycaster from './raycaster';
import { AmbientLight } from 'three';
import imageData from './mesh/texture64';

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
renderer.setClearColor(0x000000, 0);

scene.add(new AmbientLight(0xffffff));
scene.add(cube);
updater.add(cube);
raycaster.add(cube);
updater.start();

// expose global functions so they can be invoked from iOS / Android
window.updater = updater;
window.cube = cube;
window.raycaster = raycaster;
window.testImage = () => {
  for (let i = 1; i < 6; i++) cube.textureChanger.setFromDataUrl(i, imageData);
};
