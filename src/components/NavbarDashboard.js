import React from 'react'

const NavbarDashboard = () => {
    return (
        <>
            <section className='flex w-[80%] mt-10 shadow-lg shadow-gray-700  rounded-lg mx-auto flex-row justify-between bg-white'>
                <h1 className=' mx-2 my-auto tracking-wide  items-center text-black text-2xl font-bold'>
                    Your Clinic Name
                  
                </h1>
                <div className='flex  mx-2 my-1 flex-row gap-2'>
                  <div><p>Doctor Zeena</p>
                     <p className='text-[#505050] font-bold text-xs'>Doctor</p></div>  
                    <img alt='doc' className='h-[45px] w-[45px] rounded-full bg-[#017A884D] ' src='/doctor1.png' />
                </div>
            </section>
        </>
    )
}

export default NavbarDashboard