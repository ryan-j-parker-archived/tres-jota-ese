import * as THREE from 'https://unpkg.com/three@0.139.2/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.139.2/examples/jsm/controls/OrbitControls.js';


// setting up the scene, camera, and renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('background'),
});
document.body.appendChild(renderer.domElement);

// setting page size === user's screen size
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// adding light sources
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(21, 1, 10);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xffffff);
pointLight.position.set(11, 1, 20);
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xffffff);
pointLight.position.set(77, 1, 30);
scene.add(pointLight3);

const pointLight4 = new THREE.PointLight(0xffffff);
pointLight.position.set(42, 1, 50);
scene.add(pointLight4);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// adding helpers to place lights and objects
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

const sphereSize = 1;
const lightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
scene.add(lightHelper);

// controls to move around landscape
const controls = new OrbitControls(camera, renderer.domElement);
renderer.render(scene, camera);

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

const pageTexture = new THREE.TextureLoader().load('../assets/stars.jpg');
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
const space = new THREE.TextureLoader().load('../assets/space.jpg');
const stoneTexture = new THREE.TextureLoader().load('../assets/stone.jpg');
const space2 = new THREE.TextureLoader().load('../assets/space2.jpg');
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
    new THREE.SphereGeometry(13, 43, 323),
    new THREE.MeshBasicMaterial({
        map: brightPaint,
        normalMap: shinyBright,
    }),
);
moon.position.setX(-110);
moon.position.setY(90);
moon.position.setZ(-280);
scene.add(moon);

// spheroid
const spheroid = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 128),
    new THREE.MeshStandardMaterial({
        map: goldenWaterTexture,
        normalMap: iceTexture,
    }),
);
spheroid.position.setX(55);
spheroid.position.setY(15);
spheroid.position.setZ(-65);
scene.add(spheroid);

// planet
const planet = new THREE.Mesh(
    new THREE.SphereGeometry(6, 28, 99),
    new THREE.MeshStandardMaterial({
        map: shinyTexture,
        normalMap: slabTexture,
    })
);
planet.position.setX(35);
planet.position.setY(-30);
planet.position.setZ(-95);
scene.add(planet);

// sphere inside torus
const donutHole = new THREE.Mesh(
    new THREE.SphereGeometry(6, 29, 132),
    new THREE.MeshStandardMaterial({
        map: brightWater,

    }),
);
donutHole.position.setX(-25);
donutHole.position.setY(-5);
donutHole.position.setZ(-45);
scene.add(donutHole);

// torus knot
const torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(10, 3, 100, 16),
    new THREE.MeshBasicMaterial({
        map: goldenWaterTexture,
        normalMap: shinyBright,
    }),
);
torusKnot.position.setX(-85);
torusKnot.position.setY(-85);
torusKnot.position.setZ(-125);
scene.add(torusKnot);

// animation function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    torus.rotation.x += 0.03;
    torus.rotation.y += 0.03;
    torus.rotation.z += 0.003;

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
    donutHole.rotation.y -= 0.05;
    donutHole.rotation.z += 0.0005;

    torusKnot.rotation.x += 0.003;
    torusKnot.rotation.y += 0.003;
    torusKnot.rotation.z += 0.0003;

    controls.update();
    console.log(scene);
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

const crateTexture = new THREE.TextureLoader().load('../assets/crate-x-bar.jpg');
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
        // color: 0x00ff00,
        map: crateTexture,
    }),
);
cube.position.setZ(25);
scene.add(cube);


const planeGeo = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 70, 70),
    new THREE.MeshStandardMaterial({
        
        wireframe: true,
    }),
);
// planeGeo.position.setX(0);
// planeGeo.position.setY(0);
// planeGeo.position.setZ(-30);

scene.add(planeGeo);