import uniqueID from '../uniqueID';

export default class Component {
  constructor(prefab) {
    this.__type = 'component';
    this.__id = uniqueID();
    this.prefab = prefab;
  }

  update() {

  }
}