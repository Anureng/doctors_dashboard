import React from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDashboard from '../components/NavbarDashboard';
import SidePanel from '../components/SidePanel';

const MainDashBoard = () => {
  return (
    <div className=' h-full'>
      <NavBar/>
    <NavbarDashboard/>
    <SidePanel/>
    <Footer/>
  </div>
  )
}

export default MainDashBoard;