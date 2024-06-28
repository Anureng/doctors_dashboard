import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDashboard from '../components/NavbarDashboard';
import SidePanel from '../components/SidePanel';
import { FaUserInjured } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import DoubleBarGraph from '../components/DoubleBarGraph';
import { RiDashboardFill } from "react-icons/ri";


const MainDashBoard = () => {

  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
     // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
     const data = await fetch("https://doctors-backend-ztcl.onrender.com/getallbookings",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ }),
       }
     );
     const dataResponse = await data.json()
 
     console.log(dataResponse);
 
     const storedId = localStorage.getItem('userId');
     if (storedId) {
         // Filter bookings based on the doc key matching the stored ID
         const matchedBookings = dataResponse.filter(el => el.doct === storedId);
         setFilteredBookings(matchedBookings);
     }

     console.log(filteredBookings);
    }
    fetchData()
   },[])
  return (
    <div className='bg-[#0075691A] min-h-screen flex flex-col'>
      <NavBar />
      <NavbarDashboard />

      <section className='flex flex-row  pb-10 gap-12 pt-10 w-[80%] mx-auto'>
        <div className='md:w-[35%] lg:w-[30%] hidden md:inline-flex'>
          <SidePanel />
        </div>
        <div className='lg:w-[60%] w-full  mx-auto flex flex-col gap-20'>
          <div className='flex flex-col md:flex-row justify-between  gap-3 w-full'>
            <div className='bg-[#FA7070] lg:p-5 p-3 md:p-1 rounded-lg'>
              <div className='flex gap-5'>
                <p><FaUserInjured className=' bg-white rounded-lg text-6xl text-[#FA7070] p-2' /></p>
                <div className='xl:text-[32px] text-xl leading-7 font-bold text-white flex flex-col text-start' >  <p >Total</p>
                  <p> Appointments</p>
                </div>
              </div>
              <div className='flex gap-10 leading-7 pt-5 font-bold text-white text-start'>
                <p className='text-xl'>5% higher than last week</p>
                <p className=' text-[32px]'>{filteredBookings.length}</p>
              </div>
            </div>

            <div className='bg-[#A1C398] lg:p-5 p-3 md:p-1   mt-10 md:mt-0 rounded-lg'>
              <div className='flex gap-5'>
                <p><BsCalendar2DateFill className='  bg-white rounded-lg text-6xl text-[#A1C398] p-2' /></p>
                <div className='text-[32px] text-xl  leading-7 font-bold text-white flex flex-col text-start' >  <p>Completed </p>
                  <p> Appointments</p>
                </div>
              </div>
              <div className='flex gap-10 leading-7 pt-5 font-bold text-white text-start'>
                <p className='text-xl'>5% higher than last week</p>
                <p className=' text-[32px]'>{filteredBookings.length}</p>
              </div>
            </div>
          </div>
          <div ><DoubleBarGraph className=' overflow-x-scroll' /></div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MainDashBoard;