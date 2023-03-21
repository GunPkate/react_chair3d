import {MeshReflectorMaterial, PresentationControls, Stage} from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { Suspense } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Experience = () =>{
    
    const gltf = useLoader(GLTFLoader,"./models/chair.gltf")

    return (
        // <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI /4]}>
            <Stage preset="rembrandt" intensity={1} environment="city">
                <Suspense>
                    <primitive object={gltf.scene}/>
                </Suspense>
                {/* <mesh>
                    <planeGeometry args={[130,130,130,130]}/> 
                    <boxGeometry/>
                     <meshNormalMaterial/>  
                    <MeshReflectorMaterial
                    blur={[300,100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={0.6}
                    color="#303030"
                    metalness={0.5}
                    />
                </mesh> */}
            </Stage>
        // </PresentationControls>
    );
}

export default Experience;