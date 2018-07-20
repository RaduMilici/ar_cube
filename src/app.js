import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export default class App {
  constructor({ selector, width, height }) {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera( 75, width / height, 0.1, 100);
    this.renderer = new WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.container = document.querySelector(selector);
    this.container.appendChild(this.renderer.domElement);
  }
}
