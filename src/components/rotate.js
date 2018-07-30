import Component from './component';

export default class Rotate extends Component {
  constructor(prefab, { x, y, z }) {
    super(prefab);
    this.x = x;
    this.y = y;
    this.z = z;
  }

  addToCurrent({ x, y, z }) {
    const newX = this.prefab.rotation.x + x;
    const newY = this.prefab.rotation.y + y;
    const newZ = this.prefab.rotation.z + z;

    return { x: newX, y: newY, z: newZ };
  }

  incrementPerFrame(delta) {
    const x = this.x * delta;
    const y = this.y * delta;
    const z = this.z * delta;

    return this.addToCurrent({ x, y, z });
  }

  setRotation({ x, y, z }) {
    this.prefab.rotation.set(x, y, z);
  }

  update({ delta }) {
    const newRotation = this.incrementPerFrame(delta);
    this.setRotation(newRotation);
  }
}