import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Scene3D() {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        {/* Objeto místico */}
        <mesh rotation={[0.5, 1, 0]}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <meshStandardMaterial color="#a855f7" wireframe />
        </mesh>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}