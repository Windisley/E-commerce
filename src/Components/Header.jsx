import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = ()=>{
    return(
       <header className="max-w-full min-h-full p-4 flex justify-between 
        bg-colorWhite border-border1 border-colorBlack items-center gap-4
       ">
            <div>
                <strong className="
                uppercase
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
                 absolute left-2 top-1/2  translate-y-centralizeone z-10 
                 cursor-pointer
                ">
                    <FaSearch className="
                    text-lg hover:text-primarygray ease-in-out duration-300
                    "/>
                </div>
               
            </div>
             <nav className="">
                <ul className="
                flex gap-4 items-center justify-center
                ">
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
                    flex
                    ">
                        <button>
                             <Link to={"Carrinho"}>
                               <FaShoppingCart className="
                               text-lg text-button hover:text-colorBlack ease-in-out duration-300
                               "/>
                
                             </Link>
                        </button>
                    </li>
                </ul>
             </nav>
       </header>
    )
}

export default Header