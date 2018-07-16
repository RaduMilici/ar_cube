import { Color, Matrix4, Geometry, Mesh, Texture } from 'three';
import Prefab from './prefab';
import Rotate from '../components/rotate';
import Loader from '../loader';
import cubeMeshPath from '../mesh/info_cube.dae';
import cubeMeshData from '../mesh/info_cube';

export default class Cube extends Prefab {
  constructor() {
    super();
    this.scale.set(0.1, 0.1, 0.1);
    this.loader = new Loader();
    this.components = [new Rotate(this, { x: 0, y: -1, z: 0 })];
    // Use this to correct rotation on X axis. Mesh would be turned sideways otherwise.
    this.rotationMatrix = new Matrix4().makeRotationX(-Math.PI / 2);
    // TODO: Turn this back on when we can make AJAX calls from swift. Use parse in the meantime.
    //this.loadCubeMesh();
    this.parseCubeMesh();
  }

  parseCubeMesh() {
    this.loader.parse(cubeMeshData, this.onLoad.bind(this));
  }

  loadCubeMesh() {
    this.loader.load(cubeMeshPath, this.onLoad.bind(this));
  }

  onLoad({ scene }) {
    this.cubeMesh = scene.children[0];

    if (!this.cubeMesh) {
      console.error('mesh not found in loaded file');
      return;
    }

    const { geometry, material } = this.cubeMesh;
    // meshes are exported with a faulty rotation, make sure to rotate them here
    geometry.applyMatrix(this.rotationMatrix);
    // convert to normal geometry. buffer geometry has broken face material index
    const convertedGeometry = new Geometry().fromBufferGeometry(geometry);
    this.add(new Mesh(convertedGeometry, material));
  }

  setTexture(materialIndex, dataURL) {
    if (!this.cubeMesh) {
      console.error('cube mesh not loaded');
      return;
    }

    const image = new Image();
    image.src = dataURL;
    const texture = new Texture();
    texture.image = image;

    image.onload = () => {
      texture.needsUpdate = true;
      const material = this.cubeMesh.material[materialIndex];

      if (!material) {
        console.error(`invalid materialIndex: ${materialIndex}`);
        return;
      }

      material.map = texture;
      material.needsUpdate = true;
    };
  }

  onClick(hitData) {
    const { materialIndex } = hitData.face;
    const { name } = hitData.object.material[materialIndex];
    hitData.object.material[materialIndex].color = new Color(Math.random() * 0xffffff);
    return { materialName: name, materialIndex };
  }
}
