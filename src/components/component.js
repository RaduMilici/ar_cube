import uniqueID from '../uniqueID';

export default class Component {
  constructor() {
    this.__type = 'component';
    this.__id = uniqueID();
  }

  update() {

  }
}