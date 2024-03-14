import React, { useState } from 'react'
import { LOGO_URL } from '../utils/contants'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const [btnNameReact,setBtnNamerReact]=useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className='flex justify-between bg-green-300 shadow-sm mb-2 sticky'>
        <div className='logo-contaner'>
        <img  className='w-40' src={LOGO_URL}/>
        </div>
        <div className='flex items-center'>
          <ul className='flex p-4 m-4 '>
           <li className='px-4 text-xl'>
           Online Status: {onlineStatus ? "🟢":"🔴"}

           </li>
            <li className='px-4 text-xl'> <Link to="/">
            Home
            </Link></li>
            <li className='px-4 text-xl'>
            <Link to="/about" >About us</Link></li>
            <li className='px-4 text-xl'>
            <Link to="/contact">
            Contact Us
            </Link></li>
            <li className='px-4 text-xl'>
            <Link to="/Cart">Cart</Link>
          </li>
          <li className='px-4 text-xl'>
            <Link to="/grocery">Grocery</Link>
          </li>
            <button className='px-4 text-xl'
            onClick={()=>{
              btnNameReact===
              "Login"?setBtnNamerReact("Logout"):setBtnNamerReact("Login");
            }}
            >{btnNameReact}</button>
          </ul>
        </div>
        
      </div>
  )
}

export default Header