import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const NavbarDashboard = () => {
    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate()

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleLogOut = () =>{
        localStorage.removeItem("userId")
        localStorage.removeItem("token")
        navigate("/")
    }

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
        <>
            <section className='flex w-[80%] shadow-lg shadow-gray-700 rounded-lg mx-auto flex-row justify-between bg-white'>
                <h1 className='mx-2 my-auto tracking-wide items-center text-black text-2xl font-bold'>
                    Your Clinic Name
                </h1>
                <div onClick={togglePopup}  className='flex mx-2 my-1 flex-row gap-2 items-center'>
                    <div style={{ cursor: 'pointer' }}>
                        <p>Doctor {filteredBookings.map((el)=>el.firstname)}</p>
                        <p className='text-[#505050] font-bold text-xs'>Doctor</p>
                    </div>
                    <img alt='doc' className='h-[45px] w-[45px] rounded-full bg-[#017A884D]' src={filteredBookings.map((el)=>el.profilepic)} />
                </div>
            </section>

            {showPopup && (
                <div className='fixed top-16 right-4 bg-white shadow-lg rounded-lg p-4'>
                    <NavLink to="/dashboard">
                    <p className='cursor-pointer' onClick={() => console.log('Navigate to Dashboard')}>Dashboard</p>
                    </NavLink>
                    <div onClick={handleLogOut}>
                    <p className='cursor-pointer' onClick={() => console.log('Logout')}>Logout</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavbarDashboard;
