import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";

export function Bird({ speed = 0.01, floatAmplitude = 0.2, floatFrequency = 1 }) {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play();
      return () => actions["Take 001"].stop();
    }
  }, [actions]);

  useFrame(({ clock, camera }) => {
    if (!birdRef.current) return;
    birdRef.current.position.y = Math.sin(clock.elapsedTime * floatFrequency) * floatAmplitude + 2;

    // Handle flying left/right with flipping
    if (birdRef.current.position.x > camera.position.x + 10) birdRef.current.rotation.y = Math.PI;
    else if (birdRef.current.position.x < camera.position.x - 10) birdRef.current.rotation.y = 0;

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += speed;
      birdRef.current.position.z -= speed;
    } else {
      birdRef.current.position.x -= speed;
      birdRef.current.position.z += speed;
    }
  });

  return (
    <group ref={birdRef} position={[-5, 2, 1]} scale={[0.001, 0.001, 0.001]}>
      <primitive object={scene} />
    </group>
  );
}
