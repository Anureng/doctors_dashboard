import React, { useState } from 'react';
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidFirstAid } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md"

const SidePanel = () => {
    const [isSecurityOpen, setIsSecurityOpen] = useState(false);
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className='flex flex-col px-10 shadow-lg pb-10 shadow-gray-700 rounded-xl mt-10 gap-3'>
            <div className='pt-10 mb-5 pb-3 border-b-[2px] border-black px-10 mx-auto'>
                <img className='h-[200px] w-[200px] mx-auto overflow-hidden rounded-full bg-[#017A884D]' alt='doctor' src='/doctor1.png' />
                <p className='font-bold mt-10 text-2xl text-center'>Dr Zeena</p>
                <p className='text-black mt-2 text-center font-bold text-lg'>Doctor</p>
            </div>
            <div className='text-[#3A3A3A] flex flex-col gap-3 leading-[39px] mx-auto text-2xl font-semibold text-start'>
                <div className='flex gap-3 items-center cursor-pointer' onClick={() => handleNavigation('/dashboard')}>
                    <RiDashboardFill />Dashboard
                </div>
                <div className='flex gap-3 items-center cursor-pointer' onClick={() => handleNavigation('/appointment')}>
                    <FaCalendar />Appointment
                </div>
                <div className='flex flex-col'>
                    <div className='flex gap-3 items-center cursor-pointer' onClick={() => setIsSecurityOpen(!isSecurityOpen)}>
                        <FaUserCircle />
                        Security
                        {isSecurityOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </div>
                    {isSecurityOpen && (
                        <div className='flex flex-col gap-2 ml-10 text-xl'>
                            <div className='cursor-pointer' onClick={() => handleNavigation('/security/change-password')}>Change Password</div>
                            <div className='cursor-pointer' onClick={() => handleNavigation('/security/email-notification')}>Email Notification</div>
                            <div className='cursor-pointer' onClick={() => handleNavigation('/security/delete-account')}>Delete Account</div>
                        </div>
                    )}
                </div>
                <div className='flex gap-3 items-center cursor-pointer' onClick={() => handleNavigation('/specialities-fee')}>
                    <BiSolidFirstAid />Specialities & Fee
                </div>
                <div className='flex flex-col'>
                    <div className='flex gap-3 items-center cursor-pointer' onClick={() => setIsSettingOpen(!isSettingOpen)}>
                        <IoSettings />
                        Setting
                        {isSettingOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </div>
                    {isSettingOpen && (
                        <div className='flex flex-col gap-2 ml-10 text-xl'>
                            <div className='cursor-pointer' onClick={() => handleNavigation('/settings/personal-details')}>Personal Details</div>
                            <div className='cursor-pointer' onClick={() => handleNavigation('/settings/education')}>Education</div>
                            <div className='cursor-pointer' onClick={() => handleNavigation('/settings/location')}>Location</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SidePanel;

