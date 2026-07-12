"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Bubbles({ count = 1400 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = t * 0.04;
      ref.current.rotation.x = Math.sin(t * 0.12) * 0.06;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#67d1ff" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function CtaParticles() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <Bubbles />
      </Canvas>
    </div>
  );
}
