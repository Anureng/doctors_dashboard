import React from 'react'

const ChangePassword = () => {
  return (
    <>
      <div className=' bg-white ml-10 p-1  shadow-lg shadow-gray-600 w-full rounded-lg flex flex-col'>
        <div className='flex justify-between items-center p-2'>
          <h1 className='text-[28px]  font-semibold'>Change Password</h1>
          <div className='text-sm  font-semibold'>DashBoard {">"} security <span className='text-[#007569]'>{'>'} Change Password</span></div>
        </div>
        <div>
          <div className='flex flex-col w-[90%]  mx-auto gap-3'>
            <label className='w-full'>
              <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>Current Password</span>
              <input type='password' className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' />
            </label>
            <label className='w-full'>
              <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>New Password</span>
              <input type="password" className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' />
            </label>


          </div>
        </div>
        <div className=' mb-4 md:ml-[70%]   mt-2 md:items-end'><button className='text-white  hover:bg-[#2f5854]   bg-[#007569] py-1 px-2 text-center rounded-md'>SAVE CHANGES</button></div>
      </div>
    </>
  )
}

export default ChangePassword