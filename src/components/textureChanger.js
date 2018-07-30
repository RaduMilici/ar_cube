import { Texture } from 'three';

export default class TextureChanger {
  constructor(mesh) {
    this.mesh = mesh;
  }

  setFromDataUrl(materialIndex, dataURL) {
    const image = new Image();
    const texture = new Texture();

    image.src = dataURL;
    texture.image = image;

    image.onload = () => {
      texture.needsUpdate = true;
      const material = this.mesh.material[materialIndex];

      if (!material) {
        console.error(`invalid materialIndex: ${materialIndex}`);
        return;
      }

      material.map = texture;
      material.needsUpdate = true;
    };
  }
}