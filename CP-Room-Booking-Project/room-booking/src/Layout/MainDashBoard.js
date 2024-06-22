import React, { useEffect } from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import {Outlet} from "react-router-dom"

const MainDashBoard = () => {
  useEffect(()=>{

    
  },[])
  return (
    <>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    
    </>
  )
}

export default MainDashBoard