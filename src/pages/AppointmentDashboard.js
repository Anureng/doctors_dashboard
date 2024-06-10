import React from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDashboard from '../components/NavbarDashboard';
import SidePanel from '../components/SidePanel';
import AllUser from '../components/AllUser';

const AppointemtDashboard = () => {
  return (
    <div className='bg-[#0075691A] min-h-screen  flex flex-col'>
    <NavBar />
    <NavbarDashboard />

    <section className='flex flex-row flex-grow w-full p-4 border  justify-evenly mx-auto'>
      <div className=' hidden md:inline-flex'>
        <SidePanel />
      </div>
      <div className='lg:w-3/5 w-full'>
        <AllUser/>
      </div>
    </section>

    <Footer />
  </div>
  )
}

export default AppointemtDashboard