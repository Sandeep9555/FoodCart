import React, {useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom';
import {MENU_API} from '../utils/contants'
import { Link } from 'react-router-dom';
import useRestaurentMenu from '../utils/useRestaurentMenu';
import ResCategory from './ResCategory';
const Restaurentmenu =  () => {
    const {resId}=useParams();
    const resInfo=useRestaurentMenu(resId);
    if(resInfo===null){
        return <Shimmer/>
       }
    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

    const{itemCards}=resInfo?.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card

    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      
    );
  return(
    <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>
        {cuisines.join(",")}- {costForTwoMessage}
        </p>
        {categories.map((category) => {
    return <ResCategory  key={category?.card?.card.title} data={category?.card?.card} />;
})}
    </div>
  )
}

export default Restaurentmenu