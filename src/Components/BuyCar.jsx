import { useContext } from "react"
import { ProductsContext } from "../Context/Products"
import { FaTrashAlt } from "react-icons/fa";


const BuyCar = ()=>{
 const {productinfo, setProductInfo} = useContext(ProductsContext)  
 
function removeItem(itemname){
    const UpdateArray = productinfo.map((item)=>
        item.name === itemname ? {...item, selectedcar: false} : item
    )

    setProductInfo(UpdateArray)
}

  const selectedproducts = productinfo.filter((item)=> item.selectedcar)

   console.log(productinfo)
   return (
    <div className="w-full min-h-full p-4 flex flex-col gap-4">
        {selectedproducts.length > 0 ? (
            selectedproducts.map((item) => (
                <div
                    key={item.name}
                    className="w-full min-h-full border-border1 rounded-sm flex justify-between items-center p-4"
                >
                    <div className="flex gap-2 items-center justify-center">
                        <img
                            src={item.img}
                            alt={item.name}
                            className="max-w-20 border-border1 rounded-sm object-center object-contain"
                        />
                        <strong className="capitalize text-base">{item.name}</strong>
                    </div>

                    <div className="flex gap-6 items-center justify-center moba:flex-col screen400:flex-row 
                    screen400:gap-2
                    ">
                        <p className="capitalize text-base">{item.preco}</p>
                        <div
                            className="cursor-pointer"
                            onClick={() => removeItem(item.name)}
                        >
                            <FaTrashAlt className="text-base hover:text-button ease-in-out duration-300" />
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-center text-gray-500 uppercase">Carrinho está vazio</p>
        )}
    </div>
);
};

export default BuyCar