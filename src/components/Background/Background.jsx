import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Loader, PerspectiveCamera, Points, Point, useTexture, Environment } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import { TextureLoader } from 'three';

import * as THREE from 'three';

// /**
//  * Textures
//  */
// const textureLoader = new THREE.TextureLoader();
// const particleTexture = textureLoader.load('/src/assets/particles/particle.png');

// /**
//  * Particles
//  */
// // Geometry
// const particlesGeometry = new THREE.BufferGeometry();
// const particleCount = 4000;

// const positions = new Float32Array(particleCount * 3);
// const colors = new Float32Array(particleCount * 3);

// for (let i = 0; i < particleCount * 3; i++) {
//   positions[i] = (Math.random() - 0.5) * 10;
//   colors[i] = Math.random();
// }

// particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
// particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// // Material
// const particlesMaterial = new THREE.PointsMaterial({
//   size: 0.1,
//   sizeAttenuation: true,
//   transparent: true,
//   alphaMap: particleTexture,
//   depthWrite: false,
//   blending: THREE.AdditiveBlending,
//   vertexColors: true,
// });

// // Points
// const particles = new THREE.Points(particlesGeometry, particlesMaterial);
// scene.add(particles);

// /**
//  * Sizes
//  */
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// const rendererSetSizeRatio = () => {
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// };

// const handleResize = () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   rendererSetSizeRatio();
// };

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.set(0, 0, 3);
// scene.add(camera);

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// rendererSetSizeRatio();

// /**
//  * Animation
//  */
// const clock = new THREE.Clock();
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();

//   for (let i = 0; i < particleCount; i++) {
//     const i3 = i * 3;

//     const x = particlesGeometry.attributes.position.array[i3 + 0];
//     particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x);
//   }

//   particlesGeometry.attributes.position.needsUpdate = true;

//   // Render
//   renderer.render(scene, camera);

//   // Calls tick() per frame
//   window.requestAnimationFrame(tick);
// };

// tick();

// const cameraOpts = {
//   fov: 45,
//   near: 0.001,
//   far: 100000,
//   position: [0, 3.6, 3.6],
// };

// const onCanvasCreated = ({ gl }) => {
//   gl.setPixelRatio(window.devicePixelRatio);
// };

export default function Background() {
  return (
    <Suspense>
      <Canvas frameloop="demand" dpr={[1, 2]} camera={{ position: [0, 0, 40] }}>
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <Scene />
        <Environment preset="city" />
      </Canvas>
    </Suspense>
  );
}

function Scene({ particleCount = 4000 }) {
  //   for (let i = 0; i < particleCount; i++) {
  //     const i3 = i * 3;

  //     const x = particlesGeometry.attributes.position.array[i3 + 0];
  //     particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x);
  //   }

  //   particlesGeometry.attributes.position.needsUpdate = true;

  //   // Calls tick() per frame
  //   window.requestAnimationFrame(tick);
  // };
  // const geoRef = useRef();

  // useFrame((state) => {
  //   const elapsedTime = state.clock.getElapsedTime();

  //   for (let i = 0; i < particleCount; i++) {
  //     const i3 = i * 3;

  //     const x = geoRef.current.attributes.position.array[i3 + 0];
  //     geoRef.current.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x);
  //   }

  //   geoRef.current.attributes.position.needsUpdate = true;
  // });

  // const baseColor = 'rgba(75, 85, 99, 1)';

  const particleTexture = new THREE.TextureLoader().load('/src/assets/particles/particle.png');

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }

  return (
    <Points limit={1000} range={1000}>
      <pointsMaterial
        attach="material"
        size={50}
        transparent={true}
        alphaMap={particleTexture}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
      <Point position={[...Array(100).keys()]} color={'red'} />;
    </Points>
  );
}
