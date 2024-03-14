import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Resatau_API } from '../utils/contants';
import ResCard from './ResCard';
import { upDatewithLable } from '../components/ResCard';


const ResContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const ResCardPromoted = upDatewithLable(ResCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const data = await fetch(Resatau_API);
      const json = await data.json();
      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>You are offline</h1>;
  }

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.
    filter(res => res.info.avgRating > 4);
    setFilteredRestaurants(filteredList);
  };

  const searchRestaurant = () => {
    const filteredRestaurants = listOfRestaurants.
    filter(res => res.info.name.toLowerCase().
    includes(searchText.toLowerCase()));
    setFilteredRestaurants(filteredRestaurants);
  };

  return (
    <>
      <div className='Container'>
        <div className='filter flex'>
          <div className='search m-4 p-4'>
            <input
              type="text"
              className='border border-solid
               border-black rounded-lg mx-2 py-2'
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button className='px-4 py-2 bg-green-300 rounded-lg m-4' onClick={searchRestaurant}>
              Search
            </button> 
          </div>
          <div className='filter-rating m-4 p-4 items-center'>
            <button className='px-4 py-2 bg-green-300 rounded-lg m-4' onClick={handleFilterTopRated}>
              Top Rated Restaurants
            </button>
          </div>
        </div>
      </div>

      <div className='res-container flex  flex-wrap'>
    {filteredRestaurants.map((restaurant) => (
      <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
         {
          restaurant.info.promoted? 
              (<ResCardPromoted resData={restaurant} />) : 
              (<ResCard resData={restaurant} />
        )}
      </Link>
    ))}

      </div>
    </>
  );
};

export default ResContainer;
