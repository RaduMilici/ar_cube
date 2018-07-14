import { Object3D } from 'three';
import uniqueID from '../uniqueID';

export default class Prefab extends Object3D {

  constructor() {
    super();
    this.__type = 'prefab';
    this.__id = uniqueID();
    this.components = [];
  }
  
}