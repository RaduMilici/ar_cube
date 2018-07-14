import { Raycaster as ThreeRaycaster, Vector2 } from 'three';

export default class Raycaster {

  constructor({ container, camera, scene }) {
    this.container = container;
    this.camera = camera;
    this.scene = scene;
    this.raycaster = new ThreeRaycaster();
  }

  cast(event) {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    const mouse = new Vector2(x, y);

    this.raycaster.setFromCamera(mouse, this.camera);
    return this.raycaster.intersectObjects(this.scene.children);
  }

}
