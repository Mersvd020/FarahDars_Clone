import Logo from "../../Component/landing/logo"
import CategoryList from "./categoryList"
import Search from "../../Component/other/search"

import {useRef} from "react"
import { TfiShoppingCart} from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";

type HeaderType = {
    setHeaderSizeFixed:React.Dispatch<React.SetStateAction<boolean>>
}

const Header =({setHeaderSizeFixed}:HeaderType)=>{

  const outOffer = useRef<HTMLDivElement>(null);

  const outOfferHandler = ():void =>{
      if(!outOffer.current) return
      outOffer.current.style.display = "none";
      setHeaderSizeFixed(true);
  }

    return (
        <header className="fixed w-full bg-white min-2xl:container ">
        
            <div ref={outOffer} className=" w-full  h-[56px]  bg-[url(./FarahDarsOffer.svg)] bg-cover bg-center">
             <button onClick={outOfferHandler}  className="w-[25px] h-[25px] m-2"><RiCloseLargeFill className="text-white w-full h-full"/></button>    
            </div>

            <nav className=" w-full h-[60px]  
             flex flex-row items-center justify-between
             ">
              

              <div  className="h-full w-[51%]  max-md:w-[65%]  
               flex flex-row items-center justify-end
               ">
                <Logo/>
                <CategoryList/>
                <div dir="ltr" className={` w-[65%] h-[80%]  shadow-gray-400 shadow-sm  bg-white  rounded-[8px] flex flex-row items-center`}>
                <Search  placeHolder="جستجوی آموزش..."/>
                </div>


              </div>
              
              {/*cart&register*/}
              <div className="h-full min-lg:w-[15%] min-md:w-[20%] flex flex-row items-center justify-center  gap-2  ">
                 
                   <button className="w-[100px] h-[35px] border text-[13px] font-medium
                    border-purple-600 text-purple-600 rounded-lg">
                      ورود / عضویت
                    </button>
                    
                    <div className="h-8 w-[1px] bg-gray-300"></div>
                    
                    <button className="h-[25px] w-[25px]">
                      <TfiShoppingCart/>
                    </button>
               
              </div>

            </nav>

        </header>
    )
}
export default Header