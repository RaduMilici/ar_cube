import Updater from './updater';
import Cube from './prefabs/cube';
import App from './app';

const { camera, renderer, scene } = new App();

const updater = new Updater({ renderer, scene, camera });
const cube = new Cube();

camera.position.z = 5;
renderer.setClearColor(0x000000, 1);

scene.add(cube);
updater.add(cube);

updater.start();
