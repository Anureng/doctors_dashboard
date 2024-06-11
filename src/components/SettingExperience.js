import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
const SettingExperience = () => {
  return (
    <div className='bg-white p-4 w-full space-y-2 rounded-lg shadow-lg'>
    <div className='flex items-center justify-between '>
      <p>Experience and Education</p>
      <div className='flex items-center justify-center font-light'>
      <p>Dashboard</p>    
      <p><IoIosArrowForward/></p>    
      <p>Setting</p>    
      <p><IoIosArrowForward/></p>    
      <p>Experience and Education</p>    
      </div>
    </div>
     
     <div className=''>
    <div className='bg-[#F7F7F7] flex   justify-between   p-3 space-y-3 '>
    <div className='flex  justify-between flex-col w-full p-3 space-y-3'>
      <p className='w-fit'>Add your education</p>
      <input placeholder='Institute Name' type='text' className='p-2 focus:outline-none rounded-xl'/>
      <label className='w-fit'>Starting Date</label>
      <input placeholder='starting Date' type='date' className='p-2 focus:outline-none rounded-xl'/>
      <label className='w-fit'>Ending Date</label>
      <input placeholder='Enter Last Name' type='date' className='p-2 focus:outline-none rounded-xl'/>
      <input placeholder='Degree Title' type='text' className='p-2 focus:outline-none rounded-xl'/>
        </div>
        <div>
      <p>ADD NEW</p>
      <MdOutlineDeleteOutline className='bg-red-600 text-white text-5xl rounded-lg'/>
      </div>
     </div>
    </div>

    <div className=''>
    <div className='bg-[#F7F7F7] flex   justify-between   p-3 space-y-3 '>
    <div className='flex  justify-between flex-col w-full p-3 space-y-3'>
      <p className='w-fit'>Add your Experience</p>
      <input placeholder='Company Name' type='text' className='p-2 focus:outline-none rounded-xl'/>
      <label className='w-fit'>Starting Date</label>
      <input placeholder='starting Date' type='date' className='p-2 focus:outline-none rounded-xl'/>
      <label className='w-fit'>Ending Date</label>
      <input placeholder='Enter Last Name' type='date' className='p-2 focus:outline-none rounded-xl'/>
      <input placeholder='Job Title' className='p-2 focus:outline-none rounded-xl'/>
      <input placeholder='Total Experience' className='p-2 focus:outline-none rounded-xl'/>
        </div>
        <div>
      <p>ADD NEW</p>
      <MdOutlineDeleteOutline className='bg-red-600 text-white text-5xl rounded-lg'/>
      </div>
     </div>
    </div>

    <p className=' flex justify-end mt-10'>
        <button className='bg-[#007569] px-3 py-1 rounded-lg text-white'>
        Save Changes
        </button>
        </p>

  </div>
  )
}

export default SettingExperience
