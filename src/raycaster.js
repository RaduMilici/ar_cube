import { Raycaster as ThreeRaycaster, Vector2 } from 'three';

export default class Raycaster {

  constructor({ container, camera }) {
    this.container = container;
    this.camera = camera;
    this.raycaster = new ThreeRaycaster();
    this.objects = [];
    this.addEvents();
  }

  addEvents() {
    window.addEventListener('mousedown', this.onClick.bind(this), false);
    window.addEventListener('touchstart', this.onClick.bind(this), false);
  }

  onClick(event) {
    const intersects = this.cast(event);
    intersects.forEach(hitData => hitData.object.parent.onClick(hitData));
  }

  add(prefab) {
    this.objects.push(prefab);
  }

  cast(event) {
    const x = (event.clientX / this.container.offsetWidth) * 2 - 1;
    const y = -(event.clientY / this.container.offsetHeight) * 2 + 1;
    const mouse = new Vector2(x, y);

    this.raycaster.setFromCamera(mouse, this.camera);
    return this.raycaster.intersectObjects(this.objects, true);
  }

}
