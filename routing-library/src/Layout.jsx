import React from 'react';
import { Outlet }  from  'react-router-dom';
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'


export default function Layout() {
  return (
   <>
      <Header />
      <Outlet /> {/* Outlet is for Dynamically Changing Component  */}
      <Footer />
   </>
  )
}
/* We can also make a route file in App.jsx instead of Route File */