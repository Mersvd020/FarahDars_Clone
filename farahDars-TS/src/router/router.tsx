import { createBrowserRouter } from "react-router-dom";

import LayOut from "../layout/layout"
 import LandingPage from "../Page/landing/landingPage"

 const Router = createBrowserRouter([
    
    {element:<LayOut/> ,children:[
        {index:true,element:<LandingPage/>},
        {path:"/",element:<LandingPage/>}
    ]}
])

export default Router
   