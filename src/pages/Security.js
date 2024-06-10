import React from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDashboard from '../components/NavbarDashboard';
import SidePanel from '../components/SidePanel';
import { Outlet } from 'react-router-dom';

const Security = () => {
  return (
    <div className='bg-[#0075691A] min-h-screen flex flex-col'>
    <NavBar />
    <NavbarDashboard />

    <section className='flex flex-row flex-grow pb-10 pt-10 w-[80%] mx-auto'>
      <div className='w-[30%] hidden md:inline-flex'>
        <SidePanel />
      </div>
      <div className='md:w-[60%]'>
       <Outlet/>
      </div>
    </section>

    <Footer />
  </div>
  )
}

export default Security