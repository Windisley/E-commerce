import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
       <Router>
          <Header/>
          
       </Router>
   
   </div>
  )
}

export default App
