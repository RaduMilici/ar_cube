import { ColladaLoader } from 'three-full';

export default class Loader {
  constructor() {
    this.loader = new ColladaLoader();
  }

  load(path, callback) {
    this.loader.load(path, callback);
  }
}