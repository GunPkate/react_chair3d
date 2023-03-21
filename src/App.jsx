
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { OrbitControls } from '@react-three/drei'

function App() {


  return (
    <div className="App">
      <Canvas >
        <OrbitControls/>
        <Experience/>
      </Canvas>
    </div>
  )
}

export default App
