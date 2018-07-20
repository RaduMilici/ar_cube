import { Texture } from 'three';

export default class TextureChanger {
  constructor(prefab) {
    this.prefab = prefab;
  }

  setFromDataUrl(materialIndex, dataURL) {
    const image = new Image();
    const texture = new Texture();

    image.src = dataURL;
    texture.image = image;

    image.onload = () => {
      texture.needsUpdate = true;
      const material = this.prefab.cubeMesh.material[materialIndex];

      if (!material) {
        console.error(`invalid materialIndex: ${materialIndex}`);
        return;
      }

      material.map = texture;
      material.needsUpdate = true;
    };
  }
}