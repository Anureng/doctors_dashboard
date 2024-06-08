import React from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDashboard from '../components/NavbarDashboard';
import SidePanel from '../components/SidePanel';

const MainDashBoard = () => {
  return (
    <div className=' h-full'>
      <NavBar />
      <NavbarDashboard />

      <section className='flex flex-row pb-10 pt-10 w-[80%] mx-auto'>
        <div className='w-[30%]'>
          <SidePanel />
        </div>
        <div className='w-[60%]'>
          male female graph
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MainDashBoard;