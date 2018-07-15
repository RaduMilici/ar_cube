/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, JSONLoader, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, ImageUtils, Projector, CanvasRenderer, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nclass App {\n  constructor({ selector, width, height }) {\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"]( 75, width / height, 0.1, 100);\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({ alpha: true });\n    this.renderer.setSize(width, height);\n    this.container = document.querySelector(selector);\n    this.container.appendChild(this.renderer.domElement);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uniqueID */ \"./src/uniqueID.js\");\n\n\nclass Component {\n  constructor() {\n    this.__type = 'component';\n    this.__id = Object(_uniqueID__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  update() {\n\n  }\n}\n\n//# sourceURL=webpack:///./src/components/component.js?");

/***/ }),

/***/ "./src/components/rotate.js":
/*!**********************************!*\
  !*** ./src/components/rotate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rotate; });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/components/component.js\");\n\n\nclass Rotate extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(prefab, { x, y, z }) {\n    super();\n    this.prefab = prefab;\n    this.x = x;\n    this.y = y;\n    this.z = z;\n  }\n\n  update({ delta }) {\n    this.prefab.rotation.x += this.x * delta;\n    this.prefab.rotation.y += this.y * delta;\n    this.prefab.rotation.z += this.z * delta;\n  }\n}\n\n//# sourceURL=webpack:///./src/components/rotate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updater */ \"./src/updater.js\");\n/* harmony import */ var _prefabs_cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefabs/cube */ \"./src/prefabs/cube.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _raycaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raycaster */ \"./src/raycaster.js\");\n\n\n\n\n\nconst appSettings = {\n  selector: '#webgl',\n  width: window.innerWidth,\n  height: window.innerHeight\n};\n\nconst { camera, renderer, scene, container } = new _app__WEBPACK_IMPORTED_MODULE_2__[\"default\"](appSettings);\nconst raycaster = new _raycaster__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({ container, camera });\n\nconst updater = new _updater__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ renderer, scene, camera });\nconst cube = new _prefabs_cube__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\ncamera.position.set(0, 0, 5);\nrenderer.setClearColor(0x000000, 1);\n\nscene.add(cube);\nupdater.add(cube);\nraycaster.add(cube);\n\nupdater.start();\n\nwindow.test = cube.onClick.bind(cube);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/prefabs/cube.js":
/*!*****************************!*\
  !*** ./src/prefabs/cube.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cube; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _prefab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefab */ \"./src/prefabs/prefab.js\");\n/* harmony import */ var _components_rotate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/rotate */ \"./src/components/rotate.js\");\n\n\n\n\nclass Cube extends _prefab__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n  constructor() {\n    super();\n\n    const rotate = new _components_rotate__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, { x: 0, y: -1, z: 0 });\n    this.components = [rotate];\n\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"](1, 1, 1);\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({ color: 0x00ff00 });\n    this.cube = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\n    this.add(this.cube);\n  }\n\n  onClick(hitData) {\n    this.updater.toggle(this);\n    this.cube.material.color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](Math.random() * 0xffffff);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/prefabs/cube.js?");

/***/ }),

/***/ "./src/prefabs/prefab.js":
/*!*******************************!*\
  !*** ./src/prefabs/prefab.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Prefab; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _uniqueID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uniqueID */ \"./src/uniqueID.js\");\n\n\n\nclass Prefab extends three__WEBPACK_IMPORTED_MODULE_0__[\"Object3D\"] {\n\n  constructor() {\n    super();\n    this.__type = 'prefab';\n    this.__id = Object(_uniqueID__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    this.components = [];\n  }\n\n  onClick() {}\n}\n\n//# sourceURL=webpack:///./src/prefabs/prefab.js?");

/***/ }),

/***/ "./src/raycaster.js":
/*!**************************!*\
  !*** ./src/raycaster.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Raycaster; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nclass Raycaster {\n\n  constructor({ container, camera }) {\n    this.container = container;\n    this.camera = camera;\n    this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__[\"Raycaster\"]();\n    this.objects = [];\n    this.addEvents();\n  }\n\n  addEvents() {\n    window.addEventListener('mousedown', this.onClick.bind(this), false);\n    window.addEventListener('touchstart', this.onClick.bind(this), false);\n  }\n\n  onClick(event) {\n    const intersects = this.cast(event);\n    intersects.forEach(hitData => hitData.object.parent.onClick(hitData));\n  }\n\n  add(prefab) {\n    this.objects.push(prefab);\n  }\n\n  cast(event) {\n    const x = (event.clientX / this.container.offsetWidth) * 2 - 1;\n    const y = -(event.clientY / this.container.offsetHeight) * 2 + 1;\n    const mouse = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](x, y);\n\n    this.raycaster.setFromCamera(mouse, this.camera);\n    return this.raycaster.intersectObjects(this.objects, true);\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/raycaster.js?");

/***/ }),

/***/ "./src/uniqueID.js":
/*!*************************!*\
  !*** ./src/uniqueID.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet id = 0;\n\nconst uniqueID = () => id++;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uniqueID);\n\n\n//# sourceURL=webpack:///./src/uniqueID.js?");

/***/ }),

/***/ "./src/updater.js":
/*!************************!*\
  !*** ./src/updater.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Updater; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nclass Updater {\n\n  constructor({ renderer, scene, camera }) {\n    this.scene = scene;\n    this.camera = camera;\n    this.renderer = renderer;\n    this.animationFrameId = null;\n    this.updates = [];\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\n  }\n\n  start() {\n    this.animate();\n  }\n\n  stop() {\n    cancelAnimationFrame(this.animationFrameId);\n  }\n\n  add(prefab) {\n    prefab.updater = this;\n    this.updates.push(...prefab.components);\n  }\n\n  remove(behaviour) {\n    if (behaviour.__type === 'prefab') {\n      behaviour.components.forEach(this.removeComponent.bind(this));\n    } else if (behaviour.__type === 'component') {\n      this.removeComponent(behaviour);\n    }\n  }\n\n  toggle(behaviour) {\n    if (behaviour.__type === 'prefab') {\n      behaviour.components.forEach(this.toggleComponent.bind(this));\n    } else if (behaviour.__type === 'component') {\n      this.toggleComponent(behaviour);\n    }\n  }\n\n  toggleComponent(component) {\n    const index = this.findIndex(component);\n\n    if (index === -1) {\n      this.add({ components: [component] });\n    } else {\n      this.remove(component);\n    }\n  }\n\n  findIndex(behaviour) {\n    return this.updates.findIndex(({ __id }) => behaviour.__id === __id);\n  }\n\n  removeComponent(component) {\n    const index = this.findIndex(component);\n\n    if (index !== -1) {\n      this.updates.splice(index, 1);\n    }\n  }\n\n  animate() {\n    this.update();\n    this.render();\n    requestAnimationFrame(() => this.animate());\n  }\n\n  update() {\n    const delta = this.clock.getDelta();\n\n    for (let i = 0; i < this.updates.length; i++) {\n      this.updates[i].update({ delta });\n    }\n  }\n\n  render() {\n    this.renderer.render(this.scene, this.camera);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/updater.js?");

/***/ })

/******/ });