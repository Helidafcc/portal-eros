import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function AnimatedSphere({ position, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingText({ text, position, size = 0.5 }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        position={position}
        fontSize={size}
        color="#fbbf24"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {text}
      </Text>
    </Float>
  );
}

export default function Scene3D({ variant = "home" }) {
  if (variant === "home") {
    return (
      <div className="absolute inset-0 w-full h-full -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#fbbf24" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <AnimatedSphere position={[-3, 2, -2]} color="#8b5cf6" scale={0.8} />
          <AnimatedSphere position={[3, -1, -3]} color="#fbbf24" scale={0.6} />
          <AnimatedSphere position={[0, -3, -4]} color="#ec4899" scale={0.4} />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    );
  }

  if (variant === "tarot") {
    return (
      <div className="absolute inset-0 w-full h-full -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} color="#fbbf24" intensity={0.8} />
          
          <Stars radius={50} depth={30} count={3000} factor={3} saturation={0} fade speed={0.5} />
          
          <FloatingText text="✨" position={[-4, 3, 0]} size={1} />
          <FloatingText text="🌙" position={[4, 2, 0]} size={1.2} />
          <FloatingText text="⭐" position={[-2, -3, 0]} size={0.8} />
          <FloatingText text="🔮" position={[3, -2, 0]} size={1} />
          
          <AnimatedSphere position={[0, 0, -5]} color="#8b5cf6" scale={2} />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>
    );
  }

  return null;
}

