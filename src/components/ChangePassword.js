import React, { useEffect } from 'react'
import { useState} from 'react';

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newpassword !== retypeNewPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch(`https://doctors-backend-ztcl.onrender.com/auth/updatepassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,newpassword}),
      });

      if (response.ok) {
        alert("Password Updated");
      } else {
        alert("Something went wrong...please try again later");
      }
    } catch (error) {
      console.error("Error during password update:", error);
    }
  }


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
      <div className=' bg-white ml-10 p-1  shadow-lg shadow-gray-600 w-full rounded-lg flex flex-col'>
        <div className='flex justify-between items-center p-2'>
          <h1 className='text-[28px]  font-semibold'>Change Password</h1>
          <div className='text-sm  font-semibold'>DashBoard {">"} security <span className='text-[#007569]'>{'>'} Change Password</span></div>
        </div>
        <div>
          <div className='flex flex-col w-[90%]  mx-auto gap-3'>
          <label className='w-full'>
              <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>Email</span>
              <input type='email' className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md'  value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='w-full'>
              <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>New Password</span>
              <input type='password' className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}/>
            </label>
            <label className='w-full'>
              <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>Re-Enter New Password</span>
              <input type="password" className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' value={retypeNewPassword}
                onChange={(e) => setRetypeNewPassword(e.target.value)}/>
            </label>


          </div>
        </div>
        <div className=' mb-4 md:ml-[70%]   mt-2 md:items-end'><button className='text-white  hover:bg-[#2f5854]   bg-[#007569] py-1 px-2 text-center rounded-md cursor-pointer' onClick={()=>{
          handlePasswordSubmit()
        }}>SAVE CHANGES</button></div>
      </div>
    </>
  )
}

export default ChangePassword