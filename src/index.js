import Updater from './updater';
import Cube from './prefabs/cube';
import App from './app';
import Raycaster from './raycaster';

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

scene.add(cube);
updater.add(cube);
raycaster.add(cube);

updater.start();

window.test = cube.onClick.bind(cube);
