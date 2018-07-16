import { ColladaLoader } from 'three-full';

export default class Loader {
  constructor() {
    this.loader = new ColladaLoader();
  }

  load(path, callback) {
    this.loader.load(path, callback);
  }

  parse(data, callback) {
    const parsed = this.loader.parse(data);
    callback(parsed);
  }
}