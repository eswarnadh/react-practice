import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    const [showIndex, setshowIndex] = useState(0);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const {
        name,
        cuisines,
        avgRatingString,
        costForTwoMessage,
        sla: { deliveryTime },
        totalRatingsString

    } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        const handleAccordionToggle = (index) => {
            // If clicked accordion is open, close it (set to null)
            setshowIndex(index === showIndex ? null : index);
        };
    

    return (

        <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold">{name}</h1>

                <div className="p-2 m-4 text-center ">
                    <div className="flex items-center justify-center mb-2">
                    <h3 className="font-semibold text-lg">Rating:</h3>
                    <span className={`px-1  mx-1 text-s rounded-lg font-medium text-white ${
                        avgRatingString >= 4.0
                            ? "bg-green-700"
                            : avgRatingString >= 3.0
                            ? "bg-orange-500"
                            : "bg-red-600"
                        }`} >  {avgRatingString} ★ 
                        </span>
                        <h3 className="font-semibold text-black">({totalRatingsString})</h3>
                    </div>
                    
                <div className="text-sm flex items-center justify-center px-2 mx-1"> 
                <p className="text-lg  font-bold text-orange-600">
                    {cuisines.join(", ")} 
                </p>
                <h3 className="text-lg px-2 font-semibold text-black">  {costForTwoMessage}</h3>
                </div>   
                
                <h3 className="text-md text-gray-700 font-semibold">Delivery Time: {deliveryTime} minutes</h3>
                </div>

                {/**categories accordians */}
                {categories.map(( category, index)=> 
                <RestaurantCategory 
                    key = {index} 
                    data = {category?.card?.card} 
                    showItems={index===showIndex}
                    toggleAccordion={() => handleAccordionToggle(index)}
                    />
                )
                    }


               
            </div>
   
    );
};

export default RestaurantMenu;
