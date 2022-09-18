import * as THREE from 'https://unpkg.com/three@0.139.2/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.139.2/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(21, 1, 10);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

const sphereSize = 1;
const lightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);
renderer.render(scene, camera);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    torus.rotation.x += 0.0025;
    torus.rotation.y += 0.0025;
    torus.rotation.x += 0.0025;

    controls.update();
    console.log(scene);
}

animate();

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

const pageTexture = new THREE.TextureLoader().load('../assets/stars.jpg');
scene.background = pageTexture;

const moonTexture = new THREE.TextureLoader().load('../assets/moon-water.jpg');

const moon = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ map: moonTexture }),
);

scene.add(moon);

const goldenWaterTexture = new THREE.TextureLoader().load('../assets/golden-water.jpg');
const iceTexture = new THREE.TextureLoader().load('../assets/ice-texture.jpg');

const spheroid = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 128),
    new THREE.MeshStandardMaterial({
        map: goldenWaterTexture,
        normalMap: iceTexture,
    }),
);

const shinyTexture = new THREE.TextureLoader().load('../assets/shiny-texture.jpg');
const slabTexture = new THREE.TextureLoader().load('../assets/slab-texture.jpg');

const planet = new THREE.Mesh(
    new THREE.SphereGeometry(6, 27, 99),
    new THREE.MeshStandardMaterial({
        map: shinyTexture,
        normalMap: slabTexture, 
    })
);

scene.add(planet);

planet.position.z = -45;
planet.position.setX(10);
planet.position.setY(10);

spheroid.position.z = 30;
spheroid.position.setX(5);
spheroid.position.setY(-5);

scene.add(spheroid);