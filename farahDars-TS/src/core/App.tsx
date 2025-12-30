import '../assets/core_Style/App.css'
import "../assets/font/font.css" //font

import Router from "../router/router"
import { RouterProvider } from 'react-router-dom'


// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

//redux
// import { Provider } from 'react-redux'
// import { store, persistor } from "../store/index"
// import { PersistGate } from 'redux-persist/integration/react'


function App() {
  
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router} />
    </QueryClientProvider>
      
    </>
  )
}

export default App
