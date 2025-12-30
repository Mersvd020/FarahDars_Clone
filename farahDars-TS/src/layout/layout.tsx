import {Outlet} from "react-router-dom"
import Header from "./header/header.tsx"
import Footer from "./footer/footer.tsx"


const layOut = ()=>{

    return(
       <div dir="rtl" className="w-full min-h-screen">
        <Header/>

         <main className="w-4/5 max-w-7xl mx-auto">
         <Outlet/>
         </main>

        <Footer/>
       </div>
    )
}

export default layOut