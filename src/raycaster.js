import { Raycaster as ThreeRaycaster, Vector2 } from 'three';

export default class Raycaster {
  constructor({ container, camera }) {
    this.container = container;
    this.camera = camera;
    this.raycaster = new ThreeRaycaster();
    this.objects = [];
    this.containerSize = {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight
    };
    this.addEvents();
  }

  addEvents() {
    window.addEventListener('mousedown', this.onClick.bind(this), false);
    window.addEventListener('touchstart', this.onClick.bind(this), false);
  }

  onClick(event, containerSize = this.containerSize) {
    const firstHit = this.cast(event, containerSize)[0];
    if (firstHit) {
      return firstHit.object.parent.onClick(firstHit);
    }
    // intersects.forEach(hitData => hitData.object.parent.onClick(hitData));
  }

  add(prefab) {
    this.objects.push(prefab);
  }

  cast(event, { width, height }) {
    const x = (event.clientX / width) * 2 - 1;
    const y = -(event.clientY / height) * 2 + 1;
    const mouse = new Vector2(x, y);

    this.raycaster.setFromCamera(mouse, this.camera);
    return this.raycaster.intersectObjects(this.objects, true);
  }

}
