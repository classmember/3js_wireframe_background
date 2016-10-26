var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  100, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping plane
  1000); // far clipping plane

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function createCylinder(color) {
  var geometry = new THREE.CylinderGeometry(
    50, // too radius
    1, // bottom radius
    200, // height
    320 // height segments
  );
  var material = new THREE.MeshBasicMaterial({
    color: color,
    wireframe: true
  });
  var cylinder = new THREE.Mesh(geometry, material);
  scene.add(cylinder);
  return cylinder;
}

var c1 = createCylinder('#0000ab');
var c2 = createCylinder('#3030cc');
var c3 = createCylinder('#6060cc');
var c4 = createCylinder('#30a0cc');
var c5 = createCylinder('#3090aa');
var c6 = createCylinder('#009900');

camera.position.z = 4;

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();

setInterval(function() {
  c1.rotation.z += 0.001;
  c1.rotation.y += 0.001;
  c2.rotation.z += 0.0015;
  c2.rotation.y += 0.0015;
  c3.rotation.z += 0.002;
  c3.rotation.y += 0.002;
  c4.rotation.z += 0.0005;
  c4.rotation.y += 0.0005;
  c5.rotation.z += 0.0025;
  c5.rotation.y += 0.0025;
  c6.rotation.z += 0.0002;
  c6.rotation.y += 0.0002;
}, 10);

document.querySelectorAll('canvas').ctx.globalCompositeOperation = 'lighter';
