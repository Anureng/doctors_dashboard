import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
const SettingExperience = () => {

  const [iname , setIname] = useState("")
  const [isdate , setIsdate] = useState("")
  const [iedate , setIedate] = useState("")
  const [ititle , setItitle] = useState("")

  //experience
  const [ename , setEname] = useState("")
  const [esdate , setEsdate] = useState("")
  const [eedate , setEedate] = useState("")
  const [etitle , setEtitle] = useState("")
  const [experience , setExperience] = useState("")


  const addLocation = async() =>{
    try {
      const id = localStorage.getItem("userId");
    const data=   await fetch(
        `https://doctors-backend-ztcl.onrender.com/updatesettings/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({edu:{"name":iname ,"sdate":isdate ,"edate":iedate ,"title":ititle  } , exp:{"name":ename , "sdate":esdate , "edate":eedate , "title":etitle , "experience":experience}}),
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
      <input placeholder='Institute Name' value={iname} onChange={(e)=>setIname(e.target.value)} type='text' className='p-2 focus:outline-none rounded-xl'/>
      <label className='w-fit'>Starting Date</label>
      <input value={isdate} onChange={(e)=>setIsdate(e.target.value)} placeholder='starting Date' type='date' className='p-2 focus:outline-none rounded-xl'/>
      <label className='w-fit'>Ending Date</label>
      <input value={iedate} onChange={(e)=>setIedate(e.target.value)} placeholder='Enter Last Name' type='date' className='p-2 focus:outline-none rounded-xl'/>
      <input value={ititle} onChange={(e)=>setItitle(e.target.value)} placeholder='Degree Title' type='text' className='p-2 focus:outline-none rounded-xl'/>
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
      <input value={ename} onChange={(e)=>setEname(e.target.value)} placeholder='Company Name' type='text' className='p-2 focus:outline-none rounded-xl'/>
      <label className='w-fit'>Starting Date</label>
      <input value={esdate} onChange={(e)=>setEsdate(e.target.value)} placeholder='starting Date' type='date' className='p-2 focus:outline-none rounded-xl'/>
      <label className='w-fit'>Ending Date</label>
      <input value={eedate} onChange={(e)=>setEedate(e.target.value)} placeholder='Enter Last Name' type='date' className='p-2 focus:outline-none rounded-xl'/>
      <input value={etitle} onChange={(e)=>setEtitle(e.target.value)} placeholder='Job Title' className='p-2 focus:outline-none rounded-xl'/>
      <input value={experience} onChange={(e)=>setExperience(e.target.value)}  placeholder='Total Experience' className='p-2 focus:outline-none rounded-xl'/>
        </div>
        <div>
      <p>ADD NEW</p>
      <MdOutlineDeleteOutline className='bg-red-600 text-white text-5xl rounded-lg'/>
      </div>
     </div>
    </div>

    <p className=' flex justify-end mt-10'>
        <button className='bg-[#007569] px-3 py-1 rounded-lg text-white' onClick={addLocation}>
        Save Changes
        </button>
        </p>

  </div>
  )
}

export default SettingExperience
