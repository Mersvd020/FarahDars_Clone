import {Outlet} from "react-router-dom"
import Header from "./header/header.tsx"
import Footer from "./footer/footer.tsx"

import {useState} from "react"

const layOut = ()=>{

   const[HeaderSizeFixed,setHeaderSizeFixed] = useState<boolean>(false)
    // console.log(HeaderSizeFixed)

    return(
       <div dir="rtl" className="min-h-screen flex flex-col ">

        <div  className={`w-full ${HeaderSizeFixed ? "h-[60px]": "h-[117px]"} min-2xl:container min-2xl:mx-auto `}>
        <Header setHeaderSizeFixed={setHeaderSizeFixed} />
        </div>

         <main className="flex-1">
         <Outlet/>
         </main>

        <Footer/>
       </div>
    )
}

export default layOut