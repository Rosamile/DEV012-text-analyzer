import analyzer from './analyzer.js'; //127.0.0.1:3000/src/index.html

const textarea = document.querySelector('textarea[name="user-input"]');
const resetbutton = document.getElementById('reset-button');

resetbutton.addEventListener('click', () => {
  textarea.value = '';
  document.querySelector('[data-testid="word-count"]').innerHTML = 'Cantidad de palabras: ' + 0;
  document.querySelector('[data-testid="character-count"]').innerHTML = 'Cantidad de caracteres: ' + 0;
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'Cantidad de caracteres sin espacios: ' + 0;
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'Longitud media de palabras: ' + 0;
  document.querySelector('[data-testid="number-count"]').innerHTML = 'Cantidad de números: ' + 0;
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'Suma de números: ' + 0;
});

//Cuando se ejecute el evento input, se ejecutaran las funciones del analyzer
function contador1() {
  const text = textarea.value
  document.querySelector('[data-testid="word-count"]').innerHTML = 'Cantidad de palabras: ' + analyzer.getWordCount(text);
  document.querySelector('[data-testid="character-count"]').innerHTML = 'Cantidad de caracteres: ' + analyzer.getCharacterCount(text);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'Cantidad de caracteres sin espacios: ' + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'Longitud media de palabras: ' + analyzer.getAverageWordLength(text);
  document.querySelector('[data-testid="number-count"]').innerHTML = 'Cantidad de números: ' + analyzer.getNumberCount(text);
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'Suma de números: ' + analyzer.getNumberSum(text);
}
textarea.addEventListener('input', contador1);

let scene,
  camera,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  renderer,
  container,
  rocket,
  HEIGHT,
  WIDTH;

const createScene = () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  scene = new THREE.Scene();

  scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 10000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  camera.position.x = 0;
  camera.position.z = 500;
  camera.position.y = -10;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setSize(WIDTH, HEIGHT);

  renderer.shadowMap.enabled = true;

  container = document.getElementById("canvas");
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", handleWindowResize, false);

  let loader = new THREE.GLTFLoader();
  loader.load("https://stivs.dev/assets/rocket/rocket.gltf",
    (gltf) => {
      rocket = gltf.scene;
      rocket.position.y = 50;
      scene.add(rocket);
    }
  );
};

const handleWindowResize = () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
};

const createLights = () => {
  const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);

  const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
  directionalLight.position.set(-300, 0, 600);

  const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
  pointLight.position.set(200, -100, 50);

  scene.add(ambientLight, directionalLight, pointLight);
};

const targetRocketPosition = 40;
const animationDuration = 2000;

const loop = () => {
  const t = (Date.now() % animationDuration) / animationDuration;

  renderer.render(scene, camera);

  const delta = targetRocketPosition * Math.sin(Math.PI * 2 * t);
  if (rocket) {
    rocket.rotation.y += 0.1;
    rocket.position.y = delta;
  }

  requestAnimationFrame(loop);
};

const main = () => {
  createScene();
  createLights();

  renderer.render(scene, camera);
  loop();
};

main();
