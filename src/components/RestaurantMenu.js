import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{

    const {resId}=useParams();

    const [resInfo,setresInfo] = useState(null);
    useEffect(()=>{

        fetchMenu();

    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4400802&lng=78.3489168&restaurantId="+resId);
        const json = await data.json();
        setresInfo(json.data)

        console.log(json.data)
    }
    

    

    if (resInfo ===null){return <Shimmer />}

    const{ name, cuisines, avgRatingString, costForTwoMessage, sla: {deliveryTime}} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (

        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>{avgRatingString + " stars"}</h3>
            <h3>{deliveryTime + " minutes"}</h3>
            
            <h2> Menu of {name}</h2>
            <ul>
                { itemCards?.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)) }
                
            </ul>

        </div>
    )
};

export default RestaurantMenu;