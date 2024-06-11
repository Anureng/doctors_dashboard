import React from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDashboard from '../components/NavbarDashboard';
import SidePanel from '../components/SidePanel';
import { RiDeleteBinFill } from "react-icons/ri";
import { MdAdd } from "react-icons/md";

const FeesDashboard = () => {
  return (
    <div className='bg-[#0075691A] min-h-screen flex flex-col'>
      <NavBar />
      <NavbarDashboard />

      <section className='flex flex-row flex-grow pb-10 pt-10 w-[80%] mx-auto'>
        <div className='w-[30%] hidden md:inline-flex'>
          <SidePanel />
        </div>
        <div className='md:w-[60%]'>
          <div className='bg-white mx-auto md:ml-10 p-4 shadow-lg shadow-gray-600 w-full max-w-4xl rounded-lg gap-4 flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between items-center p-2'>
              <h1 className='text-[24px] md:text-[28px] font-semibold'>Specialities & Fee</h1>
              <div className='text-sm font-semibold text-center md:text-right mt-2 md:mt-0'>
                Dashboard  <span className='text-[#007569]'>{'>'} Specialities & Fee</span>
              </div>
            </div>
            <div className='flex flex-col gap-2 bg-[#F7F7F7] p-3 rounded-lg'>
              <h2 className='text-xl  font-semibold text-start'>Specialities</h2>
              <div className='flex  gap-4'>
                <select
                  name='delete_reason'
                  className='w-full  focus:no-underline p-2  outline-none text-lg text-[#505050] font-semibold rounded-md'>
                  <option value=''>Specialities</option>
                  <option value='Dentist'>Dentist</option>
                  <option value='Neurologist'>Neurologist</option>
                  <option value='Eye_Specialist'>Eye Specialist</option>
                  <option value='Gynecologist'>Gynecologist</option>
                  <option value='other'>Other</option>
                </select>
                <RiDeleteBinFill className='text-5xl bg-[#FF4B4B] text-white  rounded-md p-2 ' />
              </div>
              <div className='flex gap-4  justify-end items-center'>
                <button className='text-[#00C814] border-[3px] rounded-md p-2 border-[#00C814] '>ADD SERVICE</button>
                <MdAdd className='text-5xl bg-[#00C814] text-white  rounded-md p-2 ' />
              </div>
            </div>



            <div className='flex flex-col gap-2 bg-[#F7F7F7] p-3 rounded-lg'>
              <h2 className='text-xl  font-semibold text-start'>Specialities</h2>
              <div className='flex  gap-4 flex-row'>
                <input className='w-full  focus:no-underline p-2  outline-none text-lg text-[#505050] font-semibold rounded-md' placeholder='consultation fee' type='text' />
                <button className='text-[#00C814] border-[3px] p-2 rounded-md  border-[#00C814] '>SAVE</button></div>
            </div>

            <div className='mb-4 mt-4 flex justify-center md:justify-end'>
              <button className='text-white hover:bg-[#2f5854] bg-[#007569] py-2 px-4 rounded-md'>SAVE CHANGES</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FeesDashboard;
