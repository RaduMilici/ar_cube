import { Clock } from 'three';

export default class Updater {

  constructor({ renderer, scene, camera }) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.animationFrameId = null;
    this.updates = [];
    this.clock = new Clock();
  }

  start() {
    this.animate();
  }

  stop() {
    cancelAnimationFrame(this.animationFrameId);
  }

  add(prefab) {
    prefab.updater = this;
    this.updates.push(...prefab.components);
  }

  remove(behaviour) {
    if (behaviour.__type === 'prefab') {
      behaviour.components.forEach(this.removeComponent.bind(this));
    } else if (behaviour.__type === 'component') {
      this.removeComponent(behaviour);
    }
  }

  toggle(behaviour) {
    if (behaviour.__type === 'prefab') {
      behaviour.components.forEach(this.toggleComponent.bind(this));
    } else if (behaviour.__type === 'component') {
      this.toggleComponent(behaviour);
    }
  }

  toggleComponent(component) {
    const index = this.findIndex(component);

    if (index === -1) {
      this.add({ components: [component] });
    } else {
      this.remove(component);
    }
  }

  findIndex(behaviour) {
    return this.updates.findIndex(({ __id }) => behaviour.__id === __id);
  }

  removeComponent(component) {
    const index = this.findIndex(component);

    if (index !== -1) {
      this.updates.splice(index, 1);
    }
  }

  animate() {
    this.update();
    this.render();
    requestAnimationFrame(() => this.animate());
  }

  update() {
    const delta = this.clock.getDelta();

    for (let i = 0; i < this.updates.length; i++) {
      this.updates[i].update({ delta });
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
