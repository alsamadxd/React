import { useState } from 'react'
import Home from './compoonents/Home';
import Navbar from './compoonents/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './compoonents/About';
import Contact from './compoonents/Contact';
import User from './compoonents/User';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
  ]);

  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
