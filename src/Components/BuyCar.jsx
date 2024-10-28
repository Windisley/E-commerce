import { useContext } from "react"
import { ProductsContext } from "../Context/Products"
import { FaTrashAlt } from "react-icons/fa";


const BuyCar = ()=>{
 const {productinfo, setProductInfo} = useContext(ProductsContext)
   
    return(
        <div className="w-full min-h-full border-border1 rounded-sm 
        flex justify-between items-center p-4 
        ">
          <div className="
           flex gap-2 items-center justify-center
          ">
             <img src={productinfo[0].img} alt="" className="
             max-w-20 max-w-20 border-border1 rounded-sm
             "/>
             <strong className="
              capitalize text-base
             ">
                name product
             </strong>
          </div>

          <div className="
            flex gap-6 items-center justify-center
          ">
             <p className="
               capitalize text-base
             ">
                preço
             </p>
             <div className="
             cursor-pointer  
             ">
                <FaTrashAlt className="
                  capitalize text-base hover:text-button ease-in-out
                  duration:300
                "/>
             </div>
          </div>
        </div>
    )
}

export default BuyCar