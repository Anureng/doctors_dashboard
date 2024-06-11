import React from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDashboard from '../components/NavbarDashboard';
import SidePanel from '../components/SidePanel';
import SettingExperience from './SettingExperience';


const Education = () => {
  return (
    <div className='bg-[#0075691A] min-h-screen flex flex-col'>
    <NavBar />
    <NavbarDashboard />

    <section className='flex flex-row flex-grow w-full p-4   justify-evenly mx-auto'>
      <div className=' hidden md:inline-flex'>
        <SidePanel />
      </div>
      <div className='lg:w-2/5 w-full'>
        <SettingExperience/>
      </div>
    </section>

    <Footer />
  </div>
  )
}

export default Education