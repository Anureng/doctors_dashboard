import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
const SettingLocation = () => {


  const [gender , setGender] = useState("")
  const [location , setLocation] = useState("")
  const [address , setAddress] = useState("")
  const addLocation = async() =>{
    try {
    const data=   await fetch(
        "https://doctors-backend-ztcl.onrender.com/updatesettings/660be57c3b9e529a2236f462",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ edu:{"Gender":gender,"Location":location,"Address":address}}),
        }
      );

      if(data.ok){
      alert("added successfully")
      }
      else{
        alert("Try Again and reload the page")
      }

    } catch (error) {
      alert("Try Again and reload the page")
    }
  }
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
        <input placeholder='Enter Gender' className='p-2 focus:outline-none rounded-xl' type='text' value={gender} onChange={(e)=>setGender(e.target.value)}/>

        
            <p className='w-fit'>Your Location</p>
            <input type='text' value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Enter Location' className='p-2 focus:outline-none rounded-xl'/>
            <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Your Address' className='p-2 focus:outline-none rounded-xl'/>
        
      <p className=' flex justify-end mt-3'>
        <button className='bg-[#007569] px-3 py-1 rounded-lg text-white' onClick={addLocation}>
        Save Changes
        </button>
        </p>
       </div>
      </div>
    </div>
  )
}

export default SettingLocation
