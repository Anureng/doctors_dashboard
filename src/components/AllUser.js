import React, { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const AllUser = () => {
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [storeImage, setStoreImage] = useState({});
  const [selectValue, setSelectValue] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("https://doctors-backend-ztcl.onrender.com/getallbookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const dataResponse = await response.json();
      const storedId = localStorage.getItem('userId');
      if (storedId) {
        const matchedBookings = dataResponse.filter(el => el.doct === storedId);
        setFilteredBookings(matchedBookings);
      }
    };

    const fetchUsers = async () => {
      const response = await fetch("https://doctors-backend-ztcl.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const dataResponse = await response.json();

      const userImages = dataResponse.reduce((acc, user) => {
        acc[user._id] = user.profilepic;
        return acc;
      }, {});

      setStoreImage(userImages);
    };

    fetchBookings();
    fetchUsers();
  }, []);

  const updateDataByStatus = async (datai) => {
    try {
      const response = await fetch(`https://doctors-backend-ztcl.onrender.com/updateBooking/${datai}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Status: selectValue }),
      });

      const dataResponse = await response.json();

      if (response.ok) {
        alert("Updated");
      } else {
        alert("Try again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white w-full rounded-lg shadow-lg'>
      <div className='flex flex-col md:flex-row items-center justify-between p-4'>
        <p className='text-3xl mb-2 md:mb-0'>Appointments</p>
        <div className='flex items-center text-sm md:text-base'>
          <p>Dashboard</p>
          <FaAngleRight className='text-blue-600 mx-2' />
          <p>Appointments</p>
        </div>
      </div>

      <div className='flex items-center justify-center mb-4'>
        <div className='flex items-center rounded-xl p-2 border bg-[#F7F7F7] space-x-2 w-full max-w-md'>
          <CiSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search By Patient Name'
            className="bg-transparent focus:outline-none w-full"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className='w-full'>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Profile</th>
              <th className="p-2">Name</th>
              <th className="p-2">Time</th>
              <th className="p-2">Date</th>
              <th className="p-2">Diseases</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className='p-2'>Status</th>
              <th>Changed Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking, index) => (
              <tr key={index} className="border-b">
                <td className='flex items-center justify-center p-2'>
                  <img src={storeImage[booking.userid]} className='w-10 h-10 rounded-full' alt='Profile' />
                </td>
                <td className='p-2'>{booking.name}</td>
                <td className='p-2'>{booking.time}</td>
                <td className='p-2'>{booking.date.substr(0, 10)}</td>
                <td className='p-2'>{booking.Currentproblem ? booking.Currentproblem : 'not defined'}</td>
                <td className='p-2'>{booking.email}</td>
                <td className='p-2'>{booking.mob}</td>
                <td className='p-2'>{booking.Status}</td>
                <td>
                  <select onChange={(e) => setSelectValue(e.target.value)}>
                    <option value="">Select Status</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td>
                  <button className='p-1 bg-[#007569] text-white rounded-md' onClick={() => updateDataByStatus(booking._id)}>
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
