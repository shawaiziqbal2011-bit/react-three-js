import { Canvas, useFrame } from "@react-three/fiber"
import './App.css'
import { useRef } from "react"
import * as THREE from "three";

function App() {

  const Box = () => {

    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {


      // const pulse = 1 + Math.sin(Date.now() * 0.008) * 0.15;

      // ref.current!.scale.set(pulse, pulse, pulse);
      // ref.current.rotation.x += delta * 2
      // ref.current.rotation.y += 0.1
      // ref.current.rotation.z += 0.1

      const targetX = state.mouse.x * 2
      ref.current.position.x += (targetX - ref.current.position.x) * 0.1
      // ref.current.position.y += (targetX - ref.current.position.y) * 0.1



    })


    const handleRotate = () => {
      // ref.current.rotation.y += 20
    }

    return (
      <mesh ref={ref} position={[2, 0, 0]} onClick={handleRotate}>
        <boxGeometry />
        <meshStandardMaterial
          wireframe={true}
          color="black"
        />
      </mesh>
    )
  }

  return (


    <Canvas camera={{ position: [0, 3, 3] }}>
      <directionalLight
        intensity={20}
        position={[-6, 0, 0]}
      />
      <Box />
    </Canvas>
  )
}

export default App