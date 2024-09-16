import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants";
import { addItem } from "../utils/cartSlice";


const Itemlist =({items})=>{

    const dispatch = useDispatch();

    handleADDitem = (item)=>{
        // Dispatch an Action
        dispatch(addItem(item));

    };
 
    return (
        <div>
            {
            items.map((item) =>(
            <div 
             key = {item.card.info.id} className="p-2 m-2 border-gray-500 border-b-2 text-left flex justify-between">
               
               <div className="w-9/12">
                <div className="py-2">
                    <div className="flex items-center space-x-2 my-2">
                        <span className="flex items-center text-xs bg-green-700 text-white font-bold py-1 px-3 rounded-lg shadow-lg">
                            {item.card?.info?.ratings?.aggregatedRating?.rating || 2.2} ★
                        </span>
                        <span className="text-black font-semibold text-xs">
                            ({item.card?.info?.ratings?.aggregatedRating?.ratingCount || 8} ratings)
                        </span>
                    </div>
        <div className="text-lg font-bold mb-1">
            {item?.card?.info?.name}
        </div>
        <div className="text-gray-700 font-semibold text-sm">
            ₹ {item.card.info.price / 100 || item.card.info.defaultprice / 100 || item.card.info.finalprice /100}
        </div>
        </div>
        <div className=" p-4   max-w-md mx-auto">
            <p className="text-sm text-center text-gray-600">
                {item.card.info.description}
            </p>
            </div>
            </div>


        <div className="w-3/12 p-2 relative ">
            <div className="absolute justify-center text-center items-center">
                <button className="rounded-lg mx-24  bg-white text-green-600 font-bold   w-20 shadow-lg transition-all transform hover:scale-105 active:scale-90 duration-75 ease-out " 
                onClick={()=>handleADDitem(item)}> 
                
                    Add +
                </button>
                {/* /*
                * always use arrow function when we are giving a function with parameters to the event handler 
                * if we did not write the function with parameters in such way the function will be invoked when the component renders,
                * which is not expected behavior.
                */ }
                
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="rounded-lg" />
            <span className="text-xs text-center"><p>Customisable</p></span>
            
        </div>
                

                </div>
                
                ))}

            
            
            
        </div>
    );
};

export default Itemlist;