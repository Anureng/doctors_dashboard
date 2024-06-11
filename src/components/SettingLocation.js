import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const SettingLocation = () => {
  return (
    <div className='bg-white p-4 w-full space-y-2 rounded-lg shadow-lg'>
      <div className='flex items-center justify-between'>
        <p>Your Clinic Name</p>
        <div className='flex items-center justify-center'>
        <p>Dashboard</p>    
        <p><IoIosArrowForward/></p>    
        <p>Setting</p>    
        <p><IoIosArrowForward/></p>    
        <p>Personal Details</p>    
        </div>
      </div>
       
       <div className=''>
      <div className='bg-[#F7F7F7] flex  flex-col   p-3 space-y-3 '>
        <p className='w-fit'>Your Details</p>
        <input placeholder='Enter Gender' className='p-2 focus:outline-none rounded-xl'/>

        
            <p className='w-fit'>Your Location</p>
            <input placeholder='Enter Location' className='p-2 focus:outline-none rounded-xl'/>
            <input placeholder='Your Address' className='p-2 focus:outline-none rounded-xl'/>
        
      <p className=' flex justify-end mt-3'>
        <button className='bg-[#007569] px-3 py-1 rounded-lg text-white'>
        Save Changes
        </button>
        </p>
       </div>
      </div>
    </div>
  )
}

export default SettingLocation
