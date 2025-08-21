"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import Loader from "./Loader";

function Phoenix() {
  const group = useRef(); // group ref to move and animate the bird
  const { scene, animations } = useGLTF("/models/bird.glb");
  const { actions } = useAnimations(animations, group);

  // Play the first animation automatically when loaded
  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]])
      actions[Object.keys(actions)[0]].play();
  }, [actions]);

  // bird gently moves up & down
  useFrame(({ clock }) => {
    if (group.current)
      group.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2; // small vertical movement
  });

  return <primitive ref={group} object={scene} scale={0.01} />;
}

useGLTF.preload("/models/bird.glb");

export default function ModelViewer() {
  return (
    <div
      className="relative h-full w-full rounded-3xl overflow-hidden"
      style={{ background: "linear-gradient(to top, #ff512f, #2476dd)" }}
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 5, 15], fov: 50 }} // camera starting position
      >
        <ambientLight intensity={0.6} />
        <directionalLight castShadow position={[4, 6, 3]} intensity={1.1} />
        <Suspense fallback={<Loader />}>
          <Phoenix /> {/**animated bird */}
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
