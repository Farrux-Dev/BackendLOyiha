import React from 'react'
import Rootlayout from './layout/rootlayout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useState } from 'react'
import Home from './pages/home'
import Contact from './pages/contact'
import Admin from './pages/admin'

const App = () => {
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout></Rootlayout>}>
       <Route index element={<Home/>}></Route> 
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/admin' element={<Admin/>}></Route>
            
      </Route>
    )
   )

  return (
   <>
 <RouterProvider router={router}></RouterProvider>

   </>
  )
}

export default App
