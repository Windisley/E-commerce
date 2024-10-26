import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { useState, useRef } from "react";



const Header = ()=>{
    const [showmenu, setShowmenu] = useState(false)
    const $ul = useRef()
    function handlemenu(){
        setShowmenu((show)=>{

            const DomUl = $ul.current
            console.log(DomUl)
    
            if(!showmenu){
              DomUl.classList.add("translate-x-0", "flex", "opacity-100")
              DomUl.classList.remove("translate-x-full", "hidden", "opacity-0")    
    
            }else{
                DomUl.classList.add("translate-x-full", "hidden", "opacity-0")
                DomUl.classList.remove("translate-x-0", "flex")    
            }
              
            return !show
        })
    }
    return(
       <header className="max-w-full min-h-full p-4 flex justify-between 
        bg-colorWhite border-border1 border-colorBlack items-center gap-4
        overflow-hidden
       ">
            <div>
                <strong className="
                uppercase  moba:hidden tablet:block
                ">
                    e-commerce
                </strong>
            </div>
            <div className="
              relative w-full max-w-300
            ">
                <input type="text" placeholder="O que você esta procurando?" className="
                 w-full border-border1 border-colorBlack px-4 py-1 rounded-lg 
                 placeholder:text-center px-8
                "/>

                <div className="
                 absolute right-2 top-1/2  translate-y-centralizeone z-10 
                 cursor-pointer
                ">
                    <FaSearch className="
                    text-lg hover:text-primarygray ease-in-out duration-300
                    "/>
                </div>
               
            </div>
             <nav className="flex gap-4 items-center justify-center">
                
                <ul className="
                 min-h-dvh absolute right-0 top-0 bg-colorWhite
                 max-w-full p-4 hidden flex-col justify-center 
                 items-center gap-4 translate-x-full ease-in-out duration-500
                 z-20
                 
                " ref={$ul}>
                    <li className="
                    flex items-center justify-center
                    ">
                        <button className="
                         bg-button px-6 py-1 rounded-lg  hover:bg-colorBlack ease-in-out 
                         duration-300
                        ">
                            <Link to={"/sobre-nos"} className="
                             w-full text-base capitalize text-colorWhite p-4
                            ">
                                sobre-nos
                            </Link>
                        </button>
                    </li>
                    <li className="
                    flex items-center justify-center
                    ">
                        <button>
                             <Link to={"Carrinho"}>
                               <FaShoppingCart className="
                               text-lg text-button hover:text-colorBlack 
                               ease-in-out duration-300
                               "/>
                
                             </Link>
                        </button>
                    </li>
                </ul>

                <div className="
                relative z-30
                " onClick={handlemenu}>
                    <IoMenuSharp className="
                    text-xl cursor-pointer
                    "/>
                </div>
             </nav>
       </header>
    )
}

export default Header