import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body=() =>{

    const [ListOfRestaurants,setListOfRestaurants] = useState([]);

    const [SearchedRestaurants,setSearchedRestaurants] = useState([]);

    const [searchText,setsearchText] = useState("");


    useEffect(() =>{
        fetchData()
    }, []);

    const fetchData = async () =>{

        data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchedRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    };

    if (ListOfRestaurants.length ===0){
        return <Shimmer />;
    }

    

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={
                        (e) => {
                            
                            setsearchText(e.target.value)
                        }
                        }/>
                    <button className="btn"
                    onClick={()=>{
                        const SearchedRestaurants = ListOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        
                        setSearchedRestaurants(SearchedRestaurants);
                        
                        console.log(SearchedRestaurants);
                    }}
                    >
                        Search</button>
                </div>

                <button 
                className="filter-btn" 
                onClick={() =>{
                   const FilteredRestaurants=ListOfRestaurants.filter(
                        (res)=>res.info.avgRating>4.0
                    )
                    setSearchedRestaurants(FilteredRestaurants);
                    }
                    }>
                    Top-Rated-Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                SearchedRestaurants.map((res) =>{
                    return <Link key={res.info.id}
                    to ={"/restaurants/"+res.info.id}>
                        <RestaurantCard  resData={res}/>
                        </Link>
                })}
                

            </div>
        </div>
        
    );

}

export default Body;