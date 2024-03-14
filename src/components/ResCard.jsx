import React from 'react'
import { CDN_URL } from '../utils/contants';

const ResCard = (props) => {
  const {resData}=props;
 const{name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  sla,
}=resData?.info;
  return (

    <div className='m-4 p-4 w-[250px] bg-gray-300 h-100 rounded-lg hover:bg-gray-500'>
    <img 
     className="rounded-lg" 
     alt="res img"
        src={CDN_URL
           +
        cloudinaryImageId
        }/>
    <h2 className='font-bold py-4 text-lg'>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
     <span>
  <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
  <h4>{sla.slaString}</h4>
  <h4>{costForTwo}</h4>
</span>

    </div>
    
  )
}

 export const upDatewithLable=(ResCard)=>{

  return (props)=>{
    return(
      <div>
      <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
      <ResCard {...props}/>
      </div> 
    )
  }
}

export default ResCard