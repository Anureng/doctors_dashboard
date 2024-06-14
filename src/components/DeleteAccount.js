import React, { useEffect } from 'react'


const DeleteAccount = () => {
  useEffect(()=>{
    const data = async() =>{
    const response = await fetch(
      "https://doctors-backend-ztcl.onrender.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const makeJson = await response.json()
    console.log(makeJson);
    }
  data()
  },[])
  return (
    <>
      <div className='bg-white mx-auto md:ml-10 p-4 shadow-lg shadow-gray-600 w-full max-w-4xl rounded-lg flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between items-center p-2'>
          <h1 className='text-[24px] md:text-[28px] font-semibold'>Delete Account</h1>
          <div className='text-sm font-semibold text-center md:text-right mt-2 md:mt-0'>
            Dashboard {">"} Security <span className='text-[#007569]'>{'>'} Delete Account</span>
          </div>
        </div>
        <div>
          <div className='flex flex-col w-[90%]  mx-auto gap-3'>
            <label className='w-full'>
              <input type='text' placeholder='Enter Password' className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' />
            </label>

            <label className='w-full'>
              <input type="text" placeholder='Re-Type Password' className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' />
            </label>

            <label className='w-full'></label>
            <select
              name='delete_reason'
              className='w-full p-2 border-[2px] border-[#BEBEBE] text-gray-400 rounded-md'>
              <option value=''>Select Reason to Leave</option>
              <option value='privacy_concerns'>Privacy Concerns</option>
              <option value='found_another_doctor'>Found Another Doctor</option>
              <option value='no_longer_needed'>No Longer Needed</option>
              <option value='dissatisfied_service'>Dissatisfied with Service</option>
              <option value='other'>Other</option>
            </select>
          </div>

        </div>
        <div className='mb-4 mt-4 flex justify-center md:justify-end'>
          <button className='text-white hover:bg-[#2f5854] bg-[#007569] py-2 px-4 rounded-md'>SAVE CHANGES</button>
        </div>
      </div>
    </>
  )
}

export default DeleteAccount