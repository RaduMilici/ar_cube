import Updater from './updater';
import Cube from './prefabs/cube';
import App from './app';
import Raycaster from './raycaster';

const { camera, renderer, scene, container } = new App();
const raycaster = new Raycaster({ container, camera });

const updater = new Updater({ renderer, scene, camera });
const cube = new Cube();

camera.position.set(0, 0, 5);
renderer.setClearColor(0x000000, 1);

scene.add(cube);
updater.add(cube);
raycaster.add(cube);

updater.start();
