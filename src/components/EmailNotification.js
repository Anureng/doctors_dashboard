
import React from 'react'
import { MdEmail } from "react-icons/md";

const EmailNotification = () => {
  return (
    <>
      <div className='bg-white mx-auto md:ml-10 p-4 shadow-lg shadow-gray-600 w-full max-w-4xl rounded-lg flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between items-center p-2'>
          <h1 className='text-[24px] md:text-[28px] font-semibold'>Email Notification</h1>
          <div className='text-sm font-semibold text-center md:text-right mt-2 md:mt-0'>
            Dashboard {">"} Security <span className='text-[#007569]'>{'>'} Email Notification</span>
          </div>
        </div>
        <p className='  text-start p-2 font-semibold '>All the E-mails will be sent to the below E-mail
        address.</p>
        <div className='w-full md:w-[90%] mx-auto relative mt-4'>
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <MdEmail className='text-gray-600' />
          </div>
          <input
            type='text'
            autoComplete='off'
            placeholder='drzeena@gmail.com'
            className='w-full p-2 pl-3 pr-10 border-[2px] border-[#000000] rounded-md'
          />
        </div>
        <div className='mb-4 mt-4 flex justify-center md:justify-end'>
          <button className='text-white hover:bg-[#2f5854] bg-[#007569] py-2 px-4 rounded-md'>SAVE CHANGES</button>
        </div>
      </div>
    </>
  )
}

export default EmailNotification;
