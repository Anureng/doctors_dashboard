
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { ImSwitch } from "react-icons/im";
import { RiDashboardFill } from "react-icons/ri";


const NavbarDashboard = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { logout } = useAuth();
    const nav = useNavigate();

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const [filteredBookings, setFilteredBookings] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
            const data = await fetch("https://doctors-backend-ztcl.onrender.com/users",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
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
    }, [])

    return (
        <>
            <section className='flex w-[80%] shadow-lg shadow-gray-700 rounded-lg mx-auto flex-row justify-between bg-white'>
                <h1 className='mx-2 my-auto tracking-wide items-center text-black text-2xl font-bold'>
                    Your Clinic Name
                </h1>
                <div onClick={togglePopup} className='flex mx-2 my-1 flex-row gap-2 items-center'>
                    <div style={{ cursor: 'pointer' }}>
                        <p>Doctor {filteredBookings.map((el) => el.firstname)}</p>
                        <p className='text-[#505050] font-bold text-xs'>Doctor</p>
                    </div>
                    <img alt='doc' className='h-[45px] w-[45px] rounded-full bg-[#017A884D]' src={filteredBookings.map((el) => el.profilepic)} />
                </div>
            </section>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closePopup}></div>
                    <div className='z-10 bg-white shadow-lg rounded-lg p-4'>
                        <NavLink to="/dashboard">
                            <p className='cursor-pointer flex gap-2 ' onClick={() => console.log('Navigate to Dashboard')}><RiDashboardFill className='mb-2 py-auto text-gray-700 text-center '/>Dashboard</p>
                        </NavLink>
                        <div onClick={() => {
                            logout()
                            nav("/")
                        }}>
                            <div className='flex gap-2 '>
                           <ImSwitch className='mb-2 py-auto text-gray-700 text-center ' />
                            <p className='cursor-pointer flex gap-2 '> Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavbarDashboard;
