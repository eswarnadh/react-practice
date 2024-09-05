import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [SearchedRestaurants, setSearchedRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchedRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1 className="text-center text-red-500 text-xl mt-10">Check your internet!</h1>;
  }

  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body p-4">
      <div className="filter flex justify-between items-center mb-6">
        <div className="search flex items-center space-x-4">
          <input
            type="text"
            className="search-box p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search restaurants"
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

      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SearchedRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
