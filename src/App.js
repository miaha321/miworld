import './App.css';
import React from "react"
import Scnece from './Components/Scene';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="App">
      <h1>mincraft interactive world</h1>
      <Canvas
        shadows
        camera={{ postion: [5, 10, 10], fov: 50 }}
        style={{ width:"100ww", height:"100ww", background:"#B3E5FC"}}
      >
          <Scnece></Scnece>
      </Canvas>
    </div>
  );
}

export default App;
