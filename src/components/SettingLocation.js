import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const availabilityDays = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const SettingLocation = () => {
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);


  const toggleDaySelection = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const addLocation = async () => {
    try {
      const id = localStorage.getItem("userId");
      const data = await fetch(
        `https://doctors-backend-ztcl.onrender.com/updatesettings/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ clinic: gender, location: location ,availability:{"days":selectedDays} }),
        }
      );

      if (data.ok) {
        alert("Added successfully");
      } else {
        alert("Try again and reload the page");
      }
    } catch (error) {
      alert("Try again and reload the page");
    }
  };

  return (
    <>
      <div className='bg-white p-4 w-full space-y-2 rounded-lg shadow-lg mb-2'>
        <div className='flex items-center justify-between'>
          <p>Your Clinic Name</p>
          <div className='flex items-center justify-center'>
            <p>Dashboard</p>
            <p><IoIosArrowForward /></p>
            <p>Setting</p>
            <p><IoIosArrowForward /></p>
            <p>Personal Details</p>
          </div>
        </div>

        <div className=''>
          <div className='bg-[#F7F7F7] flex flex-col p-3 space-y-3'>
            <p className='w-fit'>Your Details</p>
            <input placeholder='Enter Gender' className='p-2 focus:outline-none rounded-xl' type='text' value={gender} onChange={(e) => setGender(e.target.value)} />

            <p className='w-fit'>Your Location</p>
            <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Enter Location' className='p-2 focus:outline-none rounded-xl' />
            <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Your Address' className='p-2 focus:outline-none rounded-xl' />

            <p className='w-fit'>Availability</p>
            <div className='space-x-3 flex flex-wrap'>
              {
                availabilityDays.map((el) => (
                  <button
                    key={el}
                    onClick={() => toggleDaySelection(el)}
                    className={`px-4 py-2 rounded-full ${selectedDays.includes(el) ? 'bg-[#007569] text-white' : 'bg-gray-200 text-black'} hover:bg-[#007569] hover:text-white transition-colors duration-300`}
                  >
                    {el}
                  </button>
                ))
              }
            </div>

            <p className='flex justify-end mt-3'>
              <button className='bg-[#007569] px-3 py-1 rounded-lg text-white' onClick={addLocation}>
                Save Changes
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingLocation;
