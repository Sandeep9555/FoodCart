import React, { useState } from 'react'
import ItemList from './ItemList'

const ResCategory = ({ data }) => {
   const [showItem, setshowItem] = useState(false);
   const handleHide = () => {
      setshowItem(!showItem);
   }
   return (
      <div>
         {<div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4
    '>
            <div className='flex justify-between cursor-pointer' onClick={handleHide}>
               <span className=' font-bold text-lg'>
                  {data.title}({data.itemCards.length
                  })</span>
               <span>⬇</span>
            </div>
            {showItem && <ItemList items={data.itemCards} />}
         </div>}
      </div> 
  )
}

export default ResCategory