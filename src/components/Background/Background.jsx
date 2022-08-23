import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { TextureLoader } from 'three';

import * as THREE from 'three';

// /**
//  * Base
//  */
// // Canvas
// const canvas = document.querySelector('canvas.webgl');

// // Scene
// const scene = new THREE.Scene();

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
    <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, 15], near: 5, far: 20 }}>
      <color attach="background" args={['red']} />
      <Scene />
    </Canvas>
  );
}

function Scene({ particleCount = 4000 }) {
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
  const geoRef = useRef();

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const x = geoRef.current.attributes.position.array[i3 + 0];
      geoRef.current.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x);
    }

    geoRef.current.attributes.position.needsUpdate = true;
  });

  const baseColor = 'rgba(75, 85, 99, 1)';

  const particleTexture = useLoader(TextureLoader, '/src/assets/particles/particle.png');

  const [positions, colors] = useMemo(() => {
    return [new Float32Array(particleCount), new Float32Array(particleCount)];
  }, [particleCount]);

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = baseColor;
  }

  return (
    <points>
      <bufferGeometry attach="geometry" ref={geoRef}>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length * 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute attachObject={['attributes', 'rgba']} count={colors.length * 3} array={colors} itemSize={3} />
        <pointsMaterial
          attach="material"
          size={0.1}
          transparent
          alphaMap={particleTexture}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors
        />
      </bufferGeometry>
    </points>
  );
}
