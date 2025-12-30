import Logo from "../../Component/header/logo"
import CategoryList from "../../Component/header/categoryList"
import Search from "../../Component/other/search"

import {useRef,useState} from "react"
import { TfiShoppingCart} from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";
import {Button,IconButton} from "@mui/material";


const Header =()=>{

  const outOffer = useRef<HTMLDivElement>(null);

  const outOfferHandler = ():void =>{
      if(!outOffer.current) return
      outOffer.current.style.display = "none";
      setHeaderSizeFixed(true);
  }

  const[HeaderSizeFixed,setHeaderSizeFixed] = useState<boolean>(false)
    // console.log(HeaderSizeFixed)

    return (
        <div  className={`w-full ${HeaderSizeFixed ? "h-[60px]": "h-[117px]"} flex flex-col items-center`}> 
        <header className="fixed z-100 w-full bg-white min-2xl:container shadow-sm ">
        
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
                 
                    <Button 
                     variant="outlined"> 
                     <span className="font-bold text-[12px]">
                      ورود / عضویت
                      </span>
                      </Button>
                    
                    <div className="h-8 w-[1px] bg-gray-300"></div>
                    
                    <IconButton color="primary"  aria-label="add to shopping cart">
                        <TfiShoppingCart className="text-[black] p-1"/>
                    </IconButton>
               
              </div>

            </nav>

        </header>
     </div>   
    )
}
export default Header