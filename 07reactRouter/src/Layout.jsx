import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return ( // header and footer remain same , only outlet (body part) changes , outlet signifies that we can do nesting of components
    <>
    <Header/>
    <Outlet/>  
    <Footer/>
    </>
  )
}

export default Layout