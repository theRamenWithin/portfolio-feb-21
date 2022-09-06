import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import particle from '../../assets/particles/particle.png';
import * as THREE from 'three';

function Points() {
  const ref = useRef();

  // Texture
  const texture = useLoader(THREE.TextureLoader, particle);

  // Positions
  let count = 10;

  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let yi = 0; yi < count; yi++) {
        let x = xi - count / 2;
        let y = yi - count / 2;
        let z = 0;

        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count]);

  // Animation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    for (let i = 0; i < positions.length; i++) {
      let i3 = i * 3;
      const y = ref.current.array[i3 + 1];
      ref.current.array[i3 + 2] = Math.sin(time + y);
    }

    ref.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={ref}
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={1}
        transparent={false}
        alphaMap={texture}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
}

export default function Background() {
  return (
    <div className="fixed h-full w-full flex justify-center z-0">
      <Canvas dpr={[1, 2]} camera={{ position: [10, 0, 5], rotation: [0, 1, 1] }}>
        <Points />
      </Canvas>
    </div>
  );
}
