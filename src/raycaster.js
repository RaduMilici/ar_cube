import { Raycaster as ThreeRaycaster, Vector2 } from 'three';

export default class Raycaster {

  constructor({ container, camera }) {
    this.container = container;
    this.camera = camera;
    this.raycaster = new ThreeRaycaster();
    this.objects = [];
    this.addEvent();
  }

  add(prefab) {
    this.objects.push(prefab);
  }

  addEvent() {
    window.addEventListener('mousedown', event => {
      const intersects = this.cast(event);
      intersects.forEach(hitData => hitData.object.parent.onClick(hitData));
    }, false);
  }

  cast(event) {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    const mouse = new Vector2(x, y);

    this.raycaster.setFromCamera(mouse, this.camera);
    return this.raycaster.intersectObjects(this.objects, true);
  }

}
