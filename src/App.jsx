import { useState,useRef } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Context
import { ProductsContext } from './Context/Products'
//Context
// Components
import Header from './Components/Header'
import SectionProduct from './Components/SectionProduct';
import BuyCar from './Components/BuyCar';
//Components
import './App.css'

//Imagens
 import pagani from "./assets/Pagani_design.png"
 import rolexdate from "./assets/rolex-datejust.jpg"
 import submarinergold from "./assets/rolex-submariner-gold.png"
 import submariner from "./assets/Rolex-Submariner.png"
 import rolex from "./assets/rolex.png"
 import rolexred  from "./assets/Rolex1_redmop.png"
 
//Imagens


function App() {
    const [productinfo, setProductInfo] = useState([
      {
        img: pagani,
        name: "Pagani",
        preco: "R$120,00",
        selectcar: false
      },
      {
        img: rolexdate,
        name: "Rolex Datejust",
        preco: "R$220,00",
        selectcar: false
      },
      {
        img: submarinergold,
        name: "Submariner Gold",
        preco: "R$520,00",
        selectcar: false
      },
      {
        img: submariner,
        name: "Submariner",
        preco: "R$220,00",
        selectcar: false
      },
      {
        img: rolex,
        name: "Rolex",
        preco: "R$80,00"
,        selectcar: false
      },
      {
        img: rolexred,
        name: "Rolex Redmop",
        preco: "R$320,00",
        selectcar: false
      },

    ])
   
  return (
  

   <div className='
     w-full h-full relative
   '>
     
       <Router>
          <Header/>
          <ProductsContext.Provider value={{productinfo, setProductInfo}}>
          {/* <SectionProduct/> */}
          
          <Routes>
             <Route path='/' element={<SectionProduct/>}/>
             <Route path='/carrinho' element={<BuyCar/>}/>
             
          </Routes>
          </ProductsContext.Provider>
       </Router>
   
   </div>
  )
}

export default App
