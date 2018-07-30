import { Color, Matrix4, Geometry, Mesh } from 'three';
import Prefab from './prefab';
import Rotate from '../components/rotate';
import TextureChanger from '../components/TextureChanger';
import Loader from '../loader';
import cubeMeshPath from '../mesh/info_cube.dae';
import cubeMeshData from '../mesh/info_cube';

export default class Cube extends Prefab {
  constructor() {
    super();
    this.scale.set(0.1, 0.1, 0.1);
    this.loader = new Loader();
    this.rotate = new Rotate(this, { x: 0, y: -1, z: 0 });
    this.components = [this.rotate];
    // Use this to correct rotation on X axis. Mesh would be turned sideways otherwise.
    this.rotationMatrix = new Matrix4().makeRotationX(-Math.PI / 2);
    // TODO: Turn this back on when we can make AJAX calls from swift. Use parse in the meantime.
    //this.loader.load(cubeMeshPath, this.onMeshLoad.bind(this));
    this.loader.parse(cubeMeshData, this.onMeshLoad.bind(this));
  }

  onMeshLoad({ scene }) {
    const cubeMesh = scene.children[0];

    if (!cubeMesh) {
      console.error('mesh not found');
      return;
    }

    const { geometry, material } = cubeMesh;
    // meshes are exported with a faulty rotation, make sure to rotate them here
    geometry.applyMatrix(this.rotationMatrix);
    // convert to normal geometry. buffer geometry has broken face material index
    const convertedGeometry = new Geometry().fromBufferGeometry(geometry);
    const mesh = new Mesh(convertedGeometry, material);
    this.add(mesh);
    this.textureChanger = new TextureChanger(mesh);
  }

  rotateManually(rads) {
    const newRotation = this.rotate.addTo({ x: 0, y: rads, z: 0 });
    this.rotate.setRotation(newRotation);
  }

  onClick(hitData) {
    const materialIndex = hitData.face.materialIndex;
    const material = hitData.object.material[materialIndex];

    if (!material) {
      console.error(`invalid materialIndex: ${materialIndex}`);
      return;
    }

    material.color = new Color(Math.random() * 0xffffff);
    return { materialName: material.name, materialIndex };
  }
}
