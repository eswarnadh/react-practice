import { useState,useEffect } from "react";

const useRestaurants = () =>{

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [SearchedRestaurants, setSearchedRestaurants] = useState([]);

    useEffect(()=>{

        fetchData();

    },[]);

    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json)
        
    
        setListOfRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setSearchedRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      };





    return {ListOfRestaurants, SearchedRestaurants, setSearchedRestaurants};
}

export default useRestaurants;