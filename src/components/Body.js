import RestaurantCard ,{PromotedRestaurant} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  
  const [searchText, setsearchText] = useState("");

  const { ListOfRestaurants, SearchedRestaurants, setSearchedRestaurants} = useRestaurants();

  const RestaurantPromoted = PromotedRestaurant(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1 className="text-center text-red-500 text-xl mt-10">Check your internet!</h1>;
  }

  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body p-6 mx-32 my-9">
      <div className="filter flex justify-between items-center mb-6">
        <div className="search flex items-center space-x-4">
          <input
            type="text"
            className="search-box p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:italic placeholder:text-slate-400"
            placeholder="Search  for Flavour....."
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            onClick={() => {
              const filteredRestaurants = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchedRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          onClick={() => {
            const FilteredRestaurants = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0
            );
            setSearchedRestaurants(FilteredRestaurants);
          }}
        >
          Top-Rated Restaurants
        </button>
        
      </div>

      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SearchedRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>

            { /* {res.data.promoted ? <RestaurantPromoted resData={res} /> : <RestaurantCard resData={res} />  } */ }

            <RestaurantCard resData={res} />
            
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
