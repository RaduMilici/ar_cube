import { Color, Matrix4, Geometry, Mesh, MeshBasicMaterial } from 'three';
import Prefab from './prefab';
import Rotate from '../components/rotate';
import Loader from '../loader';
import cubeMeshPath from '../mesh/info_cube.dae';

export default class Cube extends Prefab {
  constructor() {
    super();
    this.scale.set(0.1, 0.1, 0.1);
    this.loader = new Loader();
    const rotate = new Rotate(this, { x: 0, y: -1, z: 0 });
    this.components = [rotate];
    this.loadCubeMesh();

    this.rotationMatrix = new Matrix4().makeRotationX(-Math.PI / 2);
  }

  loadCubeMesh() {
    this.loader.load(cubeMeshPath, ({ scene }) => {
      scene.children.forEach(({ geometry, material }) => {
        // meshes are exported with a faulty rotation, make sure to rotate them here
        geometry.applyMatrix(this.rotationMatrix);
        const convertedGeometry = new Geometry().fromBufferGeometry(geometry);
        const mesh = new Mesh(convertedGeometry, material);
        this.add(mesh);
      });
    });
  }

  onClick(hitData) {
    const { materialIndex } = hitData.face;
    const { name } = hitData.object.material[materialIndex];
    hitData.object.material[materialIndex].color = new Color(Math.random() * 0xffffff);
    return { name, materialIndex };
  }
}
