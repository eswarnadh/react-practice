import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = resData?.info || {}; // Destructured

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
        <div className="flex justify-between items-center mt-3">
          <h4 className="text-sm text-gray-800 font-medium">
            {avgRating} ★
          </h4>
          <h4 className="text-sm text-gray-600">{sla.slaString}</h4>
          <h4 className="text-sm text-gray-800 font-medium">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
