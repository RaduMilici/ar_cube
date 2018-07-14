import Component from './component';

export default class Rotate extends Component {
  constructor(prefab, { x, y, z }) {
    super();
    this.prefab = prefab;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  update({ delta }) {
    this.prefab.rotation.x += this.x * delta;
    this.prefab.rotation.y += this.y * delta;
    this.prefab.rotation.z += this.z * delta;
  }
}