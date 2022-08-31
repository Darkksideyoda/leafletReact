import { useState } from 'react'
import './App.css'
import LeafletComponent from "../src/mapComponents/leafletComponent"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
             <LeafletComponent />

    </div>
  )
}

export default App
