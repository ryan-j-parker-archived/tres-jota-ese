import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.139.2/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.y = 2;
camera.position.z = 40;

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('sandbox'),
});
document.body.appendChild(renderer.domElement);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.rotateSpeed = 0.9;
controls.zoomSpeed = 0.99;

controls.minDistance = 1;
controls.maxDistance = 120;

// const gridHelper = new THREE.GridHelper(100, 100, 0x00ffaa, 0xfccca1);
// scene.add(gridHelper);

const genesis = new THREE.AmbientLight(0xfffbcb);
scene.add(genesis);

const pointLight = new THREE.PointLight(0xffffff, 0.6, 5);
pointLight.position.y = 15;
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLightHelper);



const spotLight = new THREE.SpotLight(0xffffac, 2);
spotLight.position.set(0, 50, 0);
// spotLight.map = new THREE.TextureLoader().load();

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 200;
spotLight.shadow.camera.far = 400;
spotLight.shadow.camera.fov = 330;

scene.add(spotLight);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);



const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

const synth = new THREE.TextureLoader().load('./assets/synth.png');
const hex = new THREE.TextureLoader().load('./assets/hexagons.jpg');
const canopy = new THREE.TextureLoader().load('./assets/tree-canopy.jpg');
const synthPurple = new THREE.TextureLoader().load('./assets/synth-purple-flat.jpg');
const synthValley = new THREE.TextureLoader().load('./assets/synth-valley.jpg');

const bigBall = new THREE.Mesh(
    new THREE.SphereGeometry(50, 50, 50),
    new THREE.MeshStandardMaterial({
        map: synthValley,
        // color: 0x555312,
        // wireframe: true,
    }),
);
bigBall.material.side = THREE.DoubleSide;
bigBall.scale.x = -1;
bigBall.position.x = 0;
bigBall.position.y = 0;
bigBall.position.z = 0;
scene.add(bigBall);

const stoneTexture = new THREE.TextureLoader().load('../assets/stone.jpg');
const redBlackHex = new THREE.TextureLoader().load('../assets/red-black-hex.jpg');
const redhex = new THREE.TextureLoader().load('../assets/redhex.jpg');

const floor = new THREE.Mesh(
    new THREE.CircleGeometry(50, 50, 0, Math.PI * 2),
    new THREE.MeshStandardMaterial({
        map: redBlackHex,
        // color: 0xaaaaaa,
    }),
);
floor.material.side = THREE.DoubleSide;
// floor.rotation.y = 90;
// floor.rotation.z = 0;
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const torus = new THREE.TorusGeometry();


const crateTexture = new THREE.TextureLoader().load('../assets/crate-x-bar.jpg');
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({
        map: crateTexture,
    }),
);
cube.position.x = 6;
cube.position.y = 1;
cube.position.setZ(20);
scene.add(cube);

function addBoxes() {
    const xDistance = 40;
    const zDistance = 30;
    const omg = Math.floor(Math.random() * 6);
    const multPos = Math.floor(Math.random() * 25);
    const multNeg = Math.floor(Math.random() * -25);
    const randomOffset = multPos + multNeg;
    // if (randomOffset >= 25) {
    //     adjustment = randomOffset - 10;
    // } else if (randomOffset <= -25) {
    //     adjustment = randomOffset + 10;
    // } else {

    // }
    
    const geometry = new THREE.BoxGeometry(omg, omg, omg);
    const material = new THREE.MeshBasicMaterial({
        map: crateTexture,
    });
    //initial offset so does not start in middle.
    const xOffset = -80;
    for (let i = 0; i < omg; i++) {
        for (let j = 0; j < omg; j++) {
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = (xDistance * i) + xOffset;
            mesh.position.y = omg - omg / 2;
            mesh.position.z = (zDistance * j) + randomOffset;
            scene.add(mesh);
        }
    }
}

addBoxes();

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    bigBall.rotation.y -= 0.00009;
    // floor.rotation.z += 0.00005;
}

animate();

function addCubes() {
    // const xDistance = 50;
    // const zDistance = 30;
    const omg = Math.floor(Math.random() * 6);
    const multPos = Math.floor(Math.random() * 125);
    const multNeg = Math.floor(Math.random() * -15);
    const randomOffset = multPos + multNeg;

    const randomNum = Math.floor(Math.random() * 125);

    const geometry = new THREE.BoxGeometry(omg, omg, omg);
    const material = new THREE.MeshBasicMaterial({
        map: crateTexture,
    });
    //initial offset so does not start in middle.
    const offset = -80;
    for (let i = 0; i < randomNum; i++) {
        for (let j = 0; j < randomNum; j++) {
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = randomOffset * i + offset;
            mesh.position.y = omg - omg / 2;
            mesh.position.z = randomOffset * j + offset;
            scene.add(mesh);
        }
    }
}

addCubes();
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
}