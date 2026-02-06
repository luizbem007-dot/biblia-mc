import * as THREE from "three";

export type ThreeCleanup = () => void;

export function initBibleScene(canvas: HTMLCanvasElement): ThreeCleanup {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0.6, 3.5);

  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  const key = new THREE.DirectionalLight(0xffe6b0, 1.2);
  key.position.set(3, 3, 4);
  const rim = new THREE.DirectionalLight(0xffffff, 0.6);
  rim.position.set(-3, 2, -2);
  scene.add(ambient, key, rim);

  const bookGeo = new THREE.BoxGeometry(1.6, 2.2, 0.35);
  const bookMat = new THREE.MeshStandardMaterial({
    color: 0xc9a961,
    metalness: 0.4,
    roughness: 0.4,
  });
  const book = new THREE.Mesh(bookGeo, bookMat);
  book.rotation.y = -0.4;
  scene.add(book);

  const edgeGeo = new THREE.BoxGeometry(1.55, 2.15, 0.05);
  const edgeMat = new THREE.MeshStandardMaterial({
    color: 0x5c1f1f,
    metalness: 0.2,
    roughness: 0.6,
  });
  const edge = new THREE.Mesh(edgeGeo, edgeMat);
  edge.position.z = 0.2;
  scene.add(edge);

  const particles = new THREE.BufferGeometry();
  const count = 35;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 5;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }
  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xc9a961,
    size: 0.05,
    transparent: true,
    opacity: 0.8,
  });
  const particlePoints = new THREE.Points(particles, particleMat);
  scene.add(particlePoints);

  let frameId = 0;
  const clock = new THREE.Clock();

  const resize = () => {
    const { width, height } = canvas.getBoundingClientRect();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  resize();
  const handleResize = () => resize();
  window.addEventListener("resize", handleResize);

  const animate = () => {
    const t = clock.getElapsedTime();
    book.rotation.y = -0.4 + t * 0.2;
    book.rotation.x = 0.05 * Math.sin(t * 0.6);
    particlePoints.rotation.y = t * 0.1;
    particlePoints.position.y = Math.sin(t * 0.4) * 0.2;
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("resize", handleResize);
    renderer.dispose();
    bookGeo.dispose();
    bookMat.dispose();
    edgeGeo.dispose();
    edgeMat.dispose();
    particles.dispose();
    particleMat.dispose();
  };
}
