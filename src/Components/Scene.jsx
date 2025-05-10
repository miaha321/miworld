import { OrbitControls } from "@react-three/drei";
import Ground from "./ground";

export default function Scnece() {

    const handleAddBlock = ();

    return(
      <>
      <ambientLight intensity={0.4}/>
      <directionalLight position={[10, 10, 5]} intensity={0.7} castShadow/>

      <OrbitControls/>
        
        {/* <mesh>
            <boxGeometry args={[1, 1 , 1]} />
            <meshStandardMaterial color={"#8BC34A"} />
        </mesh> */}

        <Ground onAddBlock={handleAddBlock}/>
      </>
    );
}