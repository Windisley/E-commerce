import { useContext, useState } from "react";
import { ProductsContext } from "../Context/Products";
import { FaCartPlus } from "react-icons/fa";




const SectionProduct = () => {

    
    const { productinfo, setProductInfo } = useContext(ProductsContext)
    
    return (
        <div className="
        max-w-full min-h-screen p-4 relative 
        flex items-center justify-center flex-col
        ">

            <div className="
           w-full h-full border-border1 border-primarygray rounded-lg
           flex flex-col items-center p-4
           ">

                <h1 className="
            capitalize text-2xl font-semibold tracking-padrao 
            text-center
            ">
                    produtos
                </h1>



                <div className="
             w-full h-full grid place-items-center  grid-cols-gridpadrao 
             my-8 gap-2 justify-center
            ">

                    {productinfo && productinfo.map((item) => (

                    <div className="
             w-full min-h-full p-4 flex items-center
             justify-center flex-col border-border1 
             rounded-lg gap-4
            " key={item.name}>
                        <div className="
                max-w-full h-full  bg-primarygray rounded-lg p-2 flex items-center
                justify-center
                ">
                            <img src={item.img} alt="#" className="
                     w-full h-4/5 object-center object-cover
                    "/>
                        </div>
                        <div className="
                   w-4/5 flex justify-around items-center
                   ">
                            <p className="
                 uppercase font-bold text-base text-center
                ">
                                {item.name}
                            </p>

                            <div>
                                <FaCartPlus className="
                    text-lg hover:text-button cursor-pointer ease-in-out
                    "/>
                            </div>

                        </div>
                        <div className="
                  w-4/5 flex justify-around gap-2 h-full
                ">
                            <button className="
                    max-w-full h-full bg-button px-8 py-1 rounded-lg
                    text-base text-colorWhite hover:bg-colorBlack ease-in-out 
                    duration-500
                    ">
                                Comprar
                            </button>
                            <span className="
                        text-base text-center text-button
                    ">
                                {item.preco}
                            </span>
                        </div>
                    </div>

                ))}


                    {/* <div className="
                 w-full min-h-full p-4 flex items-center
                 justify-center flex-col border-border1 
                 rounded-lg gap-4
                ">
                        <div className="
                    max-w-full min-h-full bg-primarygray rounded-lg p-2
                    ">
                            <img src={""} alt="#" className="
                         w-full h-full  object-center object-cover
                        "/>
                        </div>
                        <p className="
                     uppercase font-bold text-base text-center
                    ">
                            Name
                        </p>
                        <div className="
                       w-4/5 flex justify-around gap-2 h-full
                    ">
                            <button className="
                             max-w-full h-full bg-button px-8 py-1 rounded-lg
                        text-base text-colorWhite hover:bg-colorBlack ease-in-out 
                        duration-500
                        ">
                                Comprar
                            </button>
                            <span className="
                            text-base text-center text-button
                        ">
                                R$200
                            </span>
                        </div>
                    </div>

                    <div className="
                 w-full min-h-full p-4 flex items-center
                 justify-center flex-col border-border1 
                 rounded-lg gap-4
                ">
                        <div className="
                    max-w-full min-h-full bg-primarygray rounded-lg p-2
                    ">
                            <img src="#" alt="#" className="
                         w-full h-full object-center object-cover 
                        "/>
                        </div>
                        <p className="
                     uppercase font-bold text-base text-center
                    ">
                            Name
                        </p>
                        <div className="
                       w-4/5 flex justify-around gap-2 h-full
                    ">
                            <button className="
                             max-w-full h-full bg-button px-8 py-1 rounded-lg
                        text-base text-colorWhite hover:bg-colorBlack ease-in-out 
                        duration-500
                        ">
                                Comprar
                            </button>
                            <span className="
                            text-base text-center text-button
                        ">
                                R$200
                            </span>
                        </div>
                    </div>

                    <div className="
                 w-full min-h-full p-4 flex items-center
                 justify-center flex-col border-border1 
                 rounded-lg gap-4
                ">
                        <div className="
                    max-w-full min-h-full bg-primarygray rounded-lg p-2
                    ">
                            <img src="#" alt="#" className="
                         w-full h-full object-center object-cover 
                        "/>
                        </div>
                        <p className="
                     uppercase font-bold text-base text-center
                    ">
                            Name
                        </p>
                        <div className="
                       w-4/5 flex justify-around gap-2 h-full
                    ">
                            <button className="
                             max-w-full h-full bg-button px-8 py-1 rounded-lg
                        text-base text-colorWhite hover:bg-colorBlack ease-in-out 
                        duration-500
                        ">
                                Comprar
                            </button>
                            <span className="
                            text-base text-center text-button
                        ">
                                R$200
                            </span>
                        </div>
                    </div>

                    <div className="
                 w-full min-h-full p-4 flex items-center
                 justify-center flex-col border-border1 
                 rounded-lg gap-4
                ">
                        <div className="
                    max-w-full min-h-full bg-primarygray rounded-lg p-2
                    ">
                            <img src="#" alt="#" className="
                         w-full h-full object-center object-cover 
                        "/>
                        </div>
                        <p className="
                     uppercase font-bold text-base text-center
                    ">
                            Name
                        </p>
                        <div className="
                       w-4/5 flex justify-around gap-2 h-full
                    ">
                            <button className="
                             max-w-full h-full bg-button px-8 py-1 rounded-lg
                        text-base text-colorWhite hover:bg-colorBlack ease-in-out 
                        duration-500
                        ">
                                Comprar
                            </button>
                            <span className="
                            text-base text-center text-button
                        ">
                                R$200
                            </span>
                        </div>
                    </div>

                    <div className="
                 w-full min-h-full p-4 flex items-center
                 justify-center flex-col border-border1 
                 rounded-lg gap-4
                ">
                        <div className="
                    max-w-full min-h-full bg-primarygray rounded-lg p-2
                    ">
                            <img src="#" alt="#" className="
                         w-full h-full object-center object-cover 
                        "/>
                        </div>
                        <p className="
                     uppercase font-bold text-base text-center
                    ">
                            Name
                        </p>
                        <div className="
                       w-4/5 flex justify-around gap-2 h-full
                    ">
                            <button className="
                             max-w-full h-full bg-button px-8 py-1 rounded-lg
                        text-base text-colorWhite hover:bg-colorBlack ease-in-out 
                        duration-500
                        ">
                                Comprar
                            </button>
                            <span className="
                            text-base text-center text-button
                        ">
                                R$200
                            </span>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default SectionProduct