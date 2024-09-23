import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = resData?.info || {}; // Destructured

  return (
    <div data-testid = "restCard" className="bg-white shadow-lg rounded-lg overflow-hidden  hover:shadow-xl transform transition-all  duration-300">
      <img
        className="p-2 rounded-2xl w-full h-52 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{(cuisines && cuisines.length>0) ?cuisines.join(", ") : ["italian","chinese","continental"]}</p>
        <div className="flex justify-between items-center mt-3">
          <h4 className=" bg-green-700 text-white rounded-lg shadow-lg px-3 py-1">
            {avgRating} ★
          </h4>
          <h4 className="text-sm text-gray-600">{sla?.slaString}</h4>
          <h4 className="text-sm text-gray-800 font-medium">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component (HOC) 
//Takes One Component as Input and returns the Component which is enhanced version of the component we have passed
// takes RestaurantCard as an input and returns the Component with the Label "promoted"


export const PromotedRestaurant = (RestaurantCard) =>{

  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />


      </div>
    )


  }
}

export default RestaurantCard;
