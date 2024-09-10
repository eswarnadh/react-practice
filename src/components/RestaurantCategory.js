import { useState } from "react";
import ItemList from "./ItemList";

/**  Controlled Component */
const RestaurantCategory =({data, showItems, toggleAccordion})=>{

    return (

        <div>
        {/**accordian header */}
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={toggleAccordion}>
            <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
            <span>{ showItems ? "⬆️" : "⬇️" }</span>   
        </div>
        {showItems && <ItemList items ={data.itemCards}  />}
            
        </div>
    </div>
    );    
}

export default RestaurantCategory;