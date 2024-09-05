import { useState, useEffect } from "react";

const useRestaurantMenu =  (resId)=>{

    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        

        fetchMenu();

    },[]); 

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4400802&lng=78.3489168&restaurantId="+resId)
        const json = await data.json()
        setresInfo(json.data)
        }


    return resInfo;

}

export default useRestaurantMenu;