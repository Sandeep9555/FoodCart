import React, { useState,useEffect } from 'react'
import { MENU_API } from '../utils/contants';
const useRestaurentMenu = (resId) => {

   const [resInfo,setResinfo]=useState(null);

   useEffect(()=>{
    fetchData();
   })
   async function fetchData(){  
    const data=await fetch(
        MENU_API
        +resId
        );
    const json=await data.json();
    setResinfo(json.data);
   }
  return resInfo;
  
}

export default useRestaurentMenu;