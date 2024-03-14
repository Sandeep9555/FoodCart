import React from 'react'
import { CDN_URL } from '../utils/contants'

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map(i => (
                <div key={i.card.info.id} className='p-2 m-2  border-gray-300 border-b-2   flex justify-between'>
                  
                   <div className='w-9/12 text-left'>
                    <div className='py-2'>
                        <span>{i.card.info.name}</span>

                        <span> 
                        - ${ i.card.info.price ?i.card.info.price/100
                        :i.card.info.defaultPrice/100}
                        </span>
                    </div>
                    <p className='text-xs'>
                            {i.card.info.description}
                    </p>
                    </div>
                    <div className='w-3/12 p-4'>
                    <div className='absolute'>
                    <button className='p-1 rounded-lg bg-black text-white shadow-lg'>
                         Add+
                    </button>
                    </div>
                    <img src={CDN_URL +i.card.info.imageId} className='w-full'/>
                </div> 
                </div>
                    
            ))}
        </div>
    )
}

export default ItemList
