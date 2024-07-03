import React, { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const AllUser = () => {
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectValue , setSelectValue] = useState("")


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

 
     const storedId = localStorage.getItem('userId');
     if (storedId) {
         // Filter bookings based on the doc key matching the stored ID
         const matchedBookings = dataResponse.filter(el => el.doct === storedId);
         setFilteredBookings(matchedBookings);
     }
    }
    fetchData()
   },[])
  const [search, setSearch] = useState("");

  // const filterByData = users.filter(user =>
  //   user.name.toLowerCase().includes(search.toLowerCase())
  // );

  const updateDataByStatus = async(datai) =>{
    // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})

    try {
      const data = await fetch(`https://doctors-backend-ztcl.onrender.com/updateBooking/${datai}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Status:selectValue}),
        }
      );
      const dataResponse = await data.json()
  
      if(data.ok){
        alert("Updated")
      }
      else{
        alert("Try again")
      }
    } catch (error) {
      console.log(error);
    }
   }

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
            {filteredBookings.map((user, index) => (
              <tr key={index} className="border-b">
                <td className='flex items-center justify-center p-2'>
                  <img src={user.profilepic} className='w-10 h-10 rounded-full' alt='Profile' />
                </td>
                <td className='p-2'>{user.name}</td>
                <td className='p-2'>{user.time}</td>
                <td className='p-2'>{user.date}</td>
                <td className='p-2'>{user.Currentproblem}</td>
                <td className='p-2'>{user.email}</td>
                <td className='p-2'>{user.mob}</td>
                <td className='p-2'>{user.Status}</td>
                <td>
                  <select onChange={(e)=>setSelectValue(e.target.value)}>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                </td>
                <td>
                  <button onClick={()=>updateDataByStatus(user._id)} >
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
}

export default AllUser;
