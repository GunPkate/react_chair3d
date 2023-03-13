
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

function App() {


  return (
    <div className="App">
      <Canvas>
        <Experience/>
      </Canvas>
    </div>
  )
}

export default App
