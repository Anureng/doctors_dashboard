import React, { useState, useCallback, useEffect } from 'react';
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidFirstAid } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md"
import { GoTriangleRight } from "react-icons/go";

const SidePanel = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const shouldOpenSection = useCallback((basePath) => {
        return location.pathname.startsWith(basePath);
    }, [location.pathname]);


    const [isSecurityOpen, setIsSecurityOpen] = useState(shouldOpenSection('/security'));
    const [isSettingOpen, setIsSettingOpen] = useState(shouldOpenSection('/settings'));

    const handleNavigation = (path) => {
        navigate(path);
    };

    const getActiveStyle = (path) => {
        return location.pathname === path ? 'bg-[#0075691A] rounded-md' : 'bg-white';
    };

    const getActiveStyleSub = (path) => {
        return location.pathname === path ? 'bg-[#0075691A] text-[#007569] rounded-md' : 'bg-white';
    };

    const [filteredBookings, setFilteredBookings] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
         // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
         const data = await fetch("https://doctors-backend-ztcl.onrender.com/users",
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
            // Filter bookings based on the _id key matching the stored ID
            const matchedBookings = dataResponse.filter(el => el._id === storedId);
            console.log('Matched bookings:', matchedBookings);

            setFilteredBookings(matchedBookings);
        }
    
         console.log(filteredBookings);
        }
        fetchData()
       },[])

    return (
        <div className='flex flex-col px-10 shadow-lg pb-10 shadow-gray-700 rounded-xl bg-white gap-3'>
            <div className='pt-5 mb-5 pb-3 border-b-[2px] border-black px-10 mx-auto'>
                <img className='h-[200px] w-[200px] mx-auto overflow-hidden rounded-full bg-[#017A884D]' alt='doctor' src={filteredBookings.map((el)=>el.profilepic)} />
                <p className='font-bold mt-5 text-2xl text-center'> Dr. {filteredBookings.map((el)=>el.firstname)}</p>
                <p className='text-black mt-2 text-center font-bold text-lg'>Doctor</p>
            </div>
            <div className='text-[#3A3A3A] flex flex-col gap-3 leading-[39px] mx-auto text-2xl font-semibold text-start'>
                <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/dashboard')}`} onClick={() => handleNavigation('/dashboard')}>
                    <RiDashboardFill />Dashboard
                </div>
                <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/appointment')}`} onClick={() => handleNavigation('/appointment')}>
                    <FaCalendar />Appointment
                </div>
                <div className='flex flex-col'>
                    <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/security')}`} onClick={() => setIsSecurityOpen(!isSecurityOpen)}>
                        <FaUserCircle />
                        Security
                        {isSecurityOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </div>
                    {isSecurityOpen && (
                        <div className='flex flex-col gap-2 ml-10 text-xl'>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full text-lg ${getActiveStyleSub('/security/change-password')}`} onClick={() => handleNavigation('/security/change-password')}><GoTriangleRight className='text-sm ' />Change Password</div>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full text-lg ${getActiveStyleSub('/security/email-notification')}`} onClick={() => handleNavigation('/security/email-notification')}> <GoTriangleRight className='text-sm ' />Email Notification</div>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full text-lg ${getActiveStyleSub('/security/delete-account')}`} onClick={() => handleNavigation('/security/delete-account')}> <GoTriangleRight className='text-sm ' />Delete Account</div>
                        </div>
                    )}
                </div>
                <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/fees')}`} onClick={() => handleNavigation('/fees')}>
                    <BiSolidFirstAid />Specialities & Fee
                </div>
                <div className='flex flex-col'>
                    <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/settings')}`} onClick={() => setIsSettingOpen(!isSettingOpen)}>
                        <IoSettings />
                        Setting
                        {isSettingOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </div>
                    {isSettingOpen && (
                        <div className='flex flex-col gap-2 ml-10 text-xl'>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full  text-lg ${getActiveStyleSub('/settings/personal-details')}`} onClick={() => handleNavigation('/settings/personal-details')}><GoTriangleRight className='text-sm ' /> Personal Details</div>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full  text-lg ${getActiveStyleSub('/settings/education')}`} onClick={() => handleNavigation('/settings/education')}> <GoTriangleRight className='text-sm ' />Education</div>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full  text-lg ${getActiveStyleSub('/settings/location')}`} onClick={() => handleNavigation('/settings/location')}> <GoTriangleRight className='text-sm' /> Location</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SidePanel;
