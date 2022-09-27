import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.139.2/examples/jsm/controls/OrbitControls.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
// camera.position.set(-90, 140, 140);
camera.position.z = 150;

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.setX(t * -0.00005);
    camera.position.setY(t * -0.0002);
    camera.position.setZ(t * -0.002);
}
document.body.onscroll = moveCamera;
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('box'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.toneMapping = THREE.LinearToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
// renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.rotateSpeed = 1;
controls.zoomSpeed = 1;

controls.minDistance = 1;
controls.maxDistance = 720;
// controls.update();

const sunTexture = new THREE.TextureLoader().load('../assets/sun-texture.png');

// const textureLoader = new THREE.TextureLoader();
const flame = new THREE.TextureLoader().load('./assets/fire-medq.jpg');

const sunSphere = new THREE.Mesh(
    new THREE.SphereGeometry(20, 120, 120),
    new THREE.MeshBasicMaterial({
        map: flame,
    }),
);
scene.add(sunSphere);


const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);


const spaceTexture = new THREE.TextureLoader().load('../assets/space.png');
const synthTexture = new THREE.TextureLoader().load('../assets/synth-valley.jpg');
const starsTexture = new THREE.TextureLoader().load('../assets/few-stars.jpg');

// const pageTexture = new THREE.TextureLoader().load('../assets/space2.png');
// scene.background = pageTexture;

// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//     starsTexture,
//     starsTexture,
//     starsTexture,
//     starsTexture,
//     starsTexture,
//     starsTexture
// ]);

const darkSkies = new THREE.TextureLoader().load('../assets/dark-skies.jpg');


var backgroundSphere = new THREE.Mesh(
    new THREE.BoxGeometry(800, 400, 400),
    new THREE.MeshStandardMaterial({
        map: darkSkies,
        side: THREE.DoubleSide,
        flatShading: THREE.FlatShading
    })
);

scene.add(backgroundSphere);

// const textureLoader = new THREE.TextureLoader();


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // torus.rotation.y += .05;
    // torus.rotation.z += .1;
    controls.update();
}
// animate();

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
});

// controls.rotateSpeed = 0.9;
// controls.zoomSpeed = 0.99;

// controls.minDistance = 1;
// controls.maxDistance = 120;

// const gridHelper = new THREE.GridHelper(100, 100, 0x00ffaa, 0xfccca1);
// scene.add(gridHelper);

// const genesis = new THREE.AmbientLight(0xfffbcb);
// scene.add(genesis);

// const pointLight = new THREE.PointLight(0xffffff, 2, 5);
// pointLight.position.y = 5;
// scene.add(pointLight);

// const pointLightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(pointLightHelper);



// const spotLight = new THREE.SpotLight(0xffffac);
// spotLight.position.set(0, 100, 0);

// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     controls.handleResize();
// }



// const axesHelper = new THREE.AxesHelper(1);
// scene.add(axesHelper);


// // const floor = new THREE.Mesh(
// //     new THREE.CircleGeometry(50, 50, 0, Math.PI * 2),
// //     new THREE.MeshStandardMaterial({
// //         color: 0xaaaaaa,
// //     }),
// // );
// // floor.material.side = THREE.DoubleSide;
// // // floor.rotation.y = 90;
// // // floor.rotation.z = 0;
// // floor.rotation.x = -Math.PI / 2;
// // scene.add(floor);

// const crateTexture = new THREE.TextureLoader().load('../assets/crate-x-bar.jpg');

// const farWall = new THREE.Mesh(
//     new THREE.PlaneGeometry(100, 100, 100, 100),
//     new THREE.MeshPhongMaterial({
//         side: THREE.DoubleSide,
//         flatShading: THREE.FlatShading,
//         // wireframe: true,
//         map: spaceTexture,
//     }),
// );
// farWall.position.x = 0;
// farWall.position.y = 0;
// farWall.position.z = -50;
// // farWall.rotation.x = -Math.PI / 2;

// scene.add(farWall);

// const leftWall = new THREE.Mesh(
//     new THREE.PlaneGeometry(100, 100, 100, 100),
//     new THREE.MeshPhongMaterial({
//         side: THREE.DoubleSide,
//         flatShading: THREE.FlatShading,
//         // wireframe: true,
//         map: spaceTexture,
//     }),
// );
// leftWall.position.x = -50;
// leftWall.position.y = 0;
// leftWall.position.z = 0;
// leftWall.rotation.y = -Math.PI / 2;

// scene.add(leftWall);

// const rightWall = new THREE.Mesh(
//     new THREE.PlaneGeometry(100, 100, 100, 100),
//     new THREE.MeshPhongMaterial({
//         side: THREE.DoubleSide,
//         flatShading: THREE.FlatShading,
//         // wireframe: true,
//         map: spaceTexture,
//     }),
// );
// rightWall.position.x = 50;
// rightWall.position.y = 0;
// rightWall.position.z = 0;
// rightWall.rotation.y = Math.PI / 2;

// scene.add(rightWall);

// const floorWall = new THREE.Mesh(
//     new THREE.PlaneGeometry(100, 100, 100, 100),
//     new THREE.MeshPhongMaterial({
//         side: THREE.DoubleSide,
//         flatShading: THREE.FlatShading,
//         // wireframe: true,
//         map: spaceTexture,
//     }),
// );
// floorWall.position.x = 0;
// floorWall.position.y = -50;
// floorWall.position.z = 0;
// floorWall.rotation.x = -Math.PI / 2;

// scene.add(floorWall);

// const ceilingWall = new THREE.Mesh(
//     new THREE.PlaneGeometry(100, 100, 100, 100),
//     new THREE.MeshPhongMaterial({
//         side: THREE.DoubleSide,
//         flatShading: THREE.FlatShading,
//         // wireframe: true,
//         map: spaceTexture,
//     }),
// );
// ceilingWall.position.x = 0;
// ceilingWall.position.y = 50;
// ceilingWall.position.z = 0;
// ceilingWall.rotation.x = -Math.PI / 2;

// scene.add(ceilingWall);

// const nearWall = new THREE.Mesh(
//     new THREE.PlaneGeometry(100, 100, 100, 100),
//     new THREE.MeshPhongMaterial({
//         side: THREE.DoubleSide,
//         flatShading: THREE.FlatShading,
//         // wireframe: true,
//         map: spaceTexture,
//     }),
// );
// nearWall.position.x = 0;
// nearWall.position.y = 0;
// nearWall.position.z = 50;
// nearWall.rotation.z = Math.PI / 2;

// scene.add(nearWall);

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(50, 10, 50, 50, .2),
//     new THREE.MeshStandardMaterial({
//         // color: 0x000000,
//         map: spaceTexture,
//         wireframe: true,
//     }),
// );

// scene.add(torus);

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     torus.rotation.y += .05;
//     // torus.rotation.z += .1;
// }

// animate();