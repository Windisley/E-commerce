import { useState,useRef } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Context
import { ProductsContext } from './Context/Products'
//Context

//Imagens
  //import pagani from "./assets/Pagani_design.png"
 // import rolexdate from "./assets/rolex-datejust.jpg"
 // import submarinergold from "./assets/rolex-submariner-gold.png"
 // import submariner from "./assets/Rolex-Submariner.png"
 // import rolex from "./assets/rolex.png"
//  import rolexred  from "Rolex1_redmop.png"
//Imagens

// Components
import Header from './Components/Header'
import SectionProduct from './Components/SectionProduct';
//Components
import './App.css'


function App() {

  return (
   <div className='
     w-full h-full relative
   '>
     
       <Router>
          <Header/>
          <ProductsContext.Provider>
          <SectionProduct/>

          </ProductsContext.Provider>
       </Router>
   
   </div>
  )
}

export default App
