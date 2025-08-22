import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import img from '../../assets/img/logo.png'
import Navbar from '../Navbar/Navbar';


export default function Layout({ setSearch }) {
  return (
  <>
    <div className='flex min-h-dvh'>
      
     <aside className='bg-gray-100 h-full  w-[250px] px-2 '>
        <img src={img} className='w-full my-5' alt="" />
        <div className="links flex flex-col space-y-2">
            <Link className='bg-[#f29724]  rounded-lg py-2 text-center text-white' to='/'>Meals</Link>
            <Link className='bg-[#f29724]  rounded-lg py-2 text-center text-white' to='/ingrediant'>Ingrediant</Link>
            <Link className='bg-[#f29724]  rounded-lg py-2 text-center text-white ' to='/area'>Area</Link>
        </div>
     </aside>
      <div className="bg-[#f4f2ee]  w-full">
        <Navbar  setSearch={setSearch}/>
        <Outlet />
      </div>
     
    </div>

  
  </>
  )
}
