import Component from './component';

export default class Rotate extends Component {
  constructor(prefab, { x, y, z }) {
    super();
    this.prefab = prefab;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  addTo({ x, y, z }) {
    return {
      x: this.prefab.rotation.x + x,
      y: this.prefab.rotation.y + y,
      z: this.prefab.rotation.z + z
    };
  }

  incrementPerFrame(delta) {
    const x = this.x * delta;
    const y = this.y * delta;
    const z = this.z * delta;

    return this.addTo({ x, y, z });
  }

  setRotation({ x, y, z }) {
    this.prefab.rotation.set(x, y, z);
  }

  update({ delta }) {
    const newRotation = this.incrementPerFrame(delta);
    this.setRotation(newRotation);
  }
}