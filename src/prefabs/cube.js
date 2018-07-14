import { BoxGeometry, Mesh, MeshBasicMaterial, Color } from 'three';
import Prefab from './prefab';
import Rotate from '../components/rotate';

export default class Cube extends Prefab {

  constructor() {
    super();

    this.rotate = new Rotate(this, { x: 0, y: -1, z: 0 });

    this.components = [this.rotate];

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new Mesh(geometry, material);
    this.add(this.cube);
  }

  onClick(hitData) {
    this.cube.material.color = new Color(Math.random() * 0xffffff);
  }
}
