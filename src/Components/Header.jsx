import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

import { useState, useRef, useEffect } from "react";


const Header = ()=>{
    const [showmenu, setShowmenu] = useState(false)
    const $ul = useRef()
    
    
    
    function handlemenu(){
        setShowmenu((show)=>{

            const DomUl = $ul.current
            
            
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
    useEffect(() => {
        
        function handleClickOutside(event) {
            const DomUl = $ul.current
            if ($ul.current && !($ul.current.contains(event.target))) {
                setShowmenu(false)
                DomUl.classList.add("translate-x-full", "hidden", "opacity-0")
                DomUl.classList.remove("translate-x-0", "flex")    
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
    
       
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    
    }, [])
    
    return(
       <header className="max-w-full min-h-full p-4 flex justify-between 
        bg-colorWhite border-border1 border-colorBlack items-center gap-4
        overflow-hidden
       ">
            <div>
                <Link to={"/"}>
                <strong className="
                uppercase
                ">
                    e-commerce
                </strong> 
                </Link>
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
                relative z-30  ease-in-out duration-300
                " onClick={handlemenu}>

                    {showmenu ? 
                    <RiMenu3Fill className="
                    text-xl cursor-pointer ease-in-out duration-300
                    "/>
                    
                    :
                    <IoMenuSharp className="
                    text-xl cursor-pointer ease-in-out duration-300
                    "/>
                    }
                </div>
             </nav>
       </header>
    )
}

export default Header