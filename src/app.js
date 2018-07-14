import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export default class App {
  constructor() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 100);
    this.renderer = new WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container = document.querySelector('#webgl');
    this.container.appendChild(this.renderer.domElement);
  }
}
