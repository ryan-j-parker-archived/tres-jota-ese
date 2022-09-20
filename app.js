/* eslint-disable no-unused-vars */
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.139.2/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.126.0/examples/js/loaders/GLTFLoader.js';
// import * as dat from 'https://unpkg.com/dat.gui@0.7.7/build/dat.gui.module.js';
// import { TetrahedronGeometry } from 'three';
// import * as dat from './node_modules/dat.gui/build/dat.gui.module.js';
// import gsap from './node_modules/gsap/dist/gsap.min.js';
// import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js';
// import { gsap } from 'gsap';
// console.log(gsap);
// console.log(dat.GUI);
// setting up the scene, camera, and renderer
const raycaster = new THREE.Raycaster();
console.log(raycaster);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.z = 30;


// const gui = new dat.GUI();
// const world = {
//     plane: {
//         width: 15,
//         height: 15,
//         widthSegments: 30,
//         heightSegments: 30,
//     },
// };
// gui.add(world.plane, 'width', 1, 30).onChange(generatePlane);
// gui.add(world.plane, 'height', 1, 30).onChange(generatePlane);
// gui.add(world.plane, 'widthSegments', 1, 60).onChange(generatePlane);
// gui.add(world.plane, 'heightSegments', 1, 60).onChange(generatePlane);
// console.log(world.plane.width);
// function generatePlane() {
//     planeMesh.geometry.dispose();
//     planeMesh.geometry = new THREE.PlaneGeometry(
//         world.plane.width,
//         world.plane.height,
//         world.plane.widthSegments,
//         world.plane.heightSegments,
//     );
// }


const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.getElementById('background'),
});
document.body.appendChild(renderer.domElement);

// setting page size === user's screen size
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.toneMapping = THREE.LinearToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
// adding light sources
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(21, 1, 10);
scene.add(pointLight);

// const pointLight2 = new THREE.PointLight(0xffffff);
// pointLight.position.set(11, 1, 20);
// scene.add(pointLight2);

// const pointLight3 = new THREE.PointLight(0xffffff);
// pointLight.position.set(77, 1, 30);
// scene.add(pointLight3);

const sunlight = new THREE.DirectionalLight(0xffffff, 2);
sunlight.position.set(-7, 47, -15);
scene.add(sunlight);

const sunlight2 = new THREE.HemisphereLight(0xffffff, 2);
sunlight.position.set(-17, 32, -15);
scene.add(sunlight2);

const sunlight3 = new THREE.SpotLight(0xffffff, 2);
sunlight.position.set(-12, 42, -23);
scene.add(sunlight3);

// const sphereSize = 3;
// const lightHelper = new THREE.PointLightHelper(sunlight, sphereSize);
// scene.add(lightHelper);
// const sphereSize2 = 5;
// const lightHelper2 = new THREE.PointLightHelper(sunlight2, sphereSize2);
// scene.add(lightHelper2);
// const sphereSize3 = 4;
// const lightHelper3 = new THREE.PointLightHelper(sunlight3, sphereSize3);
// scene.add(lightHelper3);

const pointLight4 = new THREE.PointLight(0xffffff);
pointLight4.position.set(15, 15, -25);
scene.add(pointLight4);

// const sphereSize4 = 2.5;
// const lightHelperQuatro = new THREE.PointLightHelper(pointLight4, sphereSize4);
// scene.add(lightHelperQuatro);

const sun = new THREE.Mesh(
    new THREE.SphereGeometry(3, 60, 33),
    new THREE.MeshStandardMaterial({
        color: 0xfff275
    })
);
sun.position.setX(-7);
sun.position.setY(37);
sun.position.setZ(-25);
scene.add(sun);

// const skyColor = 0xB1E1FF;  // light blue
// const groundColor = 0xB97A20;  // brownish orange
// const intensity = 0.5;
// const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
// scene.add(light);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(ambientLight);

// adding helpers to place lights and objects
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

// controls to move around landscape
const controls = new OrbitControls(camera, renderer.domElement);
renderer.render(scene, camera);

controls.rotateSpeed = 0.9;
controls.zoomSpeed = 0.9;

controls.minDistance = 1;
controls.maxDistance = 120;

// add random assortment of stars to page 
function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));

    star.position.set(x, y, z);
    scene.add(star);
}
Array(400).fill().forEach(addStar);

const pageTexture = new THREE.TextureLoader().load('../assets/space2.png');
scene.background = pageTexture;

const goldenWaterTexture = new THREE.TextureLoader().load('../assets/golden-water.jpg');
const iceTexture = new THREE.TextureLoader().load('../assets/ice-texture.jpg');
const moonTexture = new THREE.TextureLoader().load('../assets/moon-water.jpg');
const grassTexture = new THREE.TextureLoader().load('./assets/grass.jpg');
const shinyTexture = new THREE.TextureLoader().load('../assets/shiny-texture.jpg');
const slabTexture = new THREE.TextureLoader().load('../assets/slab-texture.jpg');
const paintTexture = new THREE.TextureLoader().load('../assets/paint-texture.jpg');
const balls = new THREE.TextureLoader().load('../assets/balls.jpg');
const brightPaint = new THREE.TextureLoader().load('../assets/bright-paint.jpg');
const brightWater = new THREE.TextureLoader().load('../assets/bright-water.jpg');
const shinyBright = new THREE.TextureLoader().load('../assets/shiny-bright.jpg');
const bwShape = new THREE.TextureLoader().load('../assets/bw-shape.jpg');
const space = new THREE.TextureLoader().load('../assets/space.png');
const stoneTexture = new THREE.TextureLoader().load('../assets/stone.jpg');
const space2 = new THREE.TextureLoader().load('../assets/space2.png');
const stars = new THREE.TextureLoader().load('../assets/stars.jpg');

// planetary bodies

// torus
const torus = new THREE.Mesh(
    new THREE.TorusGeometry(10, 3, 16, 100),
    new THREE.MeshStandardMaterial({
        map: bwShape,
        normalMap: brightWater,
        wireframe: true,
    }),
);
torus.position.setX(-25);
torus.position.setY(-5);
torus.position.setZ(-45);
scene.add(torus);

// moon
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(13, 60, 323),
    new THREE.MeshBasicMaterial({
        map: brightPaint,
        normalMap: shinyBright,
    }),
);
moon.position.setX(-140);
moon.position.setY(90);
moon.position.setZ(-280);
scene.add(moon);

// spheroid
const spheroid = new THREE.Mesh(
    new THREE.SphereGeometry(4, 60, 128),
    new THREE.MeshStandardMaterial({
        map: goldenWaterTexture,
        normalMap: iceTexture,
    }),
);
spheroid.position.setX(59);
spheroid.position.setY(18);
spheroid.position.setZ(-65);
scene.add(spheroid);

const bigPlanet = new THREE.Mesh(
    new THREE.SphereGeometry(90, 200, 200),
    new THREE.MeshPhongMaterial({
        map: space,
        normalMap: iceTexture,
    }),
);

bigPlanet.position.x = 50;
bigPlanet.position.y = 40;
bigPlanet.position.z = -320;
scene.add(bigPlanet);

// planet
const planet = new THREE.Mesh(
    new THREE.SphereGeometry(6, 60, 99),
    new THREE.MeshStandardMaterial({
        map: shinyTexture,
        normalMap: slabTexture,
    })
);
planet.position.setX(35);
planet.position.setY(-30);
planet.position.setZ(-75);
scene.add(planet);

// sphere inside torus
const donutHole = new THREE.Mesh(
    new THREE.SphereGeometry(6, 60, 132),
    new THREE.MeshBasicMaterial({
        map: brightWater,

    }),
);
donutHole.position.setX(-25);
donutHole.position.setY(-5);
donutHole.position.setZ(-45);
scene.add(donutHole);

// torus knot
const torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(120, 7, 200, 60),
    new THREE.MeshBasicMaterial({
        map: goldenWaterTexture,
        normalMap: shinyBright,
    }),
);
torusKnot.position.setX(-85);
torusKnot.position.setY(-85);
torusKnot.position.setZ(-125);
scene.add(torusKnot);

const crateTexture = new THREE.TextureLoader().load('../assets/crate-x-bar.jpg');
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({
        // color: 0x00ff00,
        map: crateTexture,
    }),
);
cube.position.x = 6;
cube.position.y = -4;
cube.position.setZ(20);
scene.add(cube);

const spinningBall = new THREE.Mesh(
    new THREE.SphereGeometry(4, 20, 20),
    new THREE.MeshStandardMaterial({
        map: grassTexture,
        normalMap: shinyBright,
    }),
);
spinningBall.position.x = 12;
spinningBall.position.y = 34;
spinningBall.position.z = -40;
scene.add(spinningBall);
const planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(45, 45, 90, 90),
    new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        flatShading: THREE.FlatShading,
        vertexColors: true,
        // wireframe: true,
    }),
);
// const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.position.x = 13;
planeMesh.position.z = -5;
// planeGeo.position.setX(0);
// planeGeo.position.setY(0);
// planeGeo.position.setZ(-30);

console.log();

const { array } = planeMesh.geometry.attributes.position;

for (let i = 0; i < array.length; i += 3) {
    console.log(array[i]);
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    // array[i] = x + (Math.random() - 0.05);
    // array[i + 1] = y + (Math.random() - 0.5);
    // array[i + 2] = z + Math.random();

    array[i + 2] = z + Math.random() * 2;
}

const colors = [];
for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
    colors.push(0.06, 0.05, 0.09);
}

planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array;

console.log(colors);

planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));

scene.add(planeMesh);

const mouse = {
    x: undefined,
    y: undefined,
};

addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // console.log(mouse);
});

addEventListener('click', (event) => {

});

// animation function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    torus.rotation.x += 0.1;
    torus.rotation.y -= 0.005;
    torus.rotation.z += 0.9;

    moon.rotation.x += 0.04;
    moon.rotation.y += 0.04;
    moon.rotation.z += 0.04;

    planet.rotation.x += .0001;
    planet.rotation.y += .005;
    planet.rotation.z += .0002;

    spheroid.rotation.x -= .002;
    spheroid.rotation.y += .0093;
    spheroid.rotation.z -= .00009;

    donutHole.rotation.x += 0.0005;
    donutHole.rotation.y -= 0.4;
    donutHole.rotation.z += 0.05;

    torusKnot.rotation.x += 0.003;
    torusKnot.rotation.y += 0.003;
    torusKnot.rotation.z += 0.0003;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;

    planeMesh.rotation.z += 0.001;

    sun.rotation.y += 0.05;
    sunlight.rotation.y += 0.05;

    bigPlanet.rotation.y -= 0.005;
    bigPlanet.rotation.z += 0.00001;
    spinningBall.rotation.y += .91;

    // for (let i = 0; i < planeMesh.geometry.attributes.position.array.length; i += 3) {
    //     array[i] = planeMesh.geometry.attributes.position.array.length[i] + (Math.cos() + 0.02);
    // }

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(planeMesh);

    if (intersects.length > 0) {
        const { color } = intersects[0].object.geometry.attributes;
        color.setX(intersects[0].face.a, 0.42);
        color.setY(intersects[0].face.a, 0.35);
        color.setZ(intersects[0].face.a, 0.61);

        color.setX(intersects[0].face.b, 0.42);
        color.setY(intersects[0].face.b, 0.36);
        color.setZ(intersects[0].face.b, 0.61);

        color.setX(intersects[0].face.c, 0.42);
        color.setY(intersects[0].face.c, 0.36);
        color.setZ(intersects[0].face.c, 0.61);

        intersects[0].object.geometry.attributes.color.needsUpdate = true;
    }

    controls.update();
    // console.log(scene);
}

animate();

// function to change camera location on user scroll
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    moon.rotation.x += 0.05;
    moon.rotation.y += 0.08;
    moon.rotation.z += 0.05;

    planet.rotation.x += 0.05;
    planet.rotation.y += 0.08;
    planet.rotation.z += 0.05;

    spheroid.rotation.x += 0.05;
    spheroid.rotation.y += 0.08;
    spheroid.rotation.z += 0.05;

    camera.position.setX(t * -0.00005);
    camera.position.setY(t * -0.0002);
    camera.position.setZ(t * -0.002);
}

document.body.onscroll = moveCamera;

const backgrounds = [
    'grassB', 'space2B', 'stoneB', 'goldWaterB', 'iceB',
];

const grassB = { src: '../ assets / grass.jpg' };
const space2B = '../assets/space2.png';
const stoneB = '../assets/stone.jpg';
const goldWaterB = '../assets/golden-water.jpg';
const iceB = '../assets/ice-texture.jpg';

// const texture = new THREE.TextureLoader().load('../assets/grass.png');

// const changeIt = new THREE.EventDispatcher();

// torus.addEventListener('click', function (event) {
//     for (let background of backgrounds) {
//         scene.background = background;
//     }

// });

planeMesh.position.x = 60;

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
}