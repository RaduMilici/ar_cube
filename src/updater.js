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
    this.updates.push(...prefab.components);
  }

  remove(behaviour) {
    if (behaviour.__type === 'prefab') {
      behaviour.components.forEach(this.removeComponent.bind(this));
    } else if (behaviour.__type === 'component') {
      this.removeComponent(behaviour);
    }
  }

  removeComponent(component) {
    const index = this.updates.findIndex(({ __id }) => component.__id === __id);

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