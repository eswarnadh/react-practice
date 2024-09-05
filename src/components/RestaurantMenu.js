import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const {
        name,
        cuisines,
        avgRatingString,
        costForTwoMessage,
        sla: { deliveryTime }
    } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-lg text-gray-600">
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
                <div className="flex space-x-4 mt-2">
                    <h3 className="text-lg font-semibold">Rating: {avgRatingString} stars</h3>
                    <h3 className="text-lg font-semibold">Delivery Time: {deliveryTime} minutes</h3>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-2">
                {itemCards?.map((item) => (
                    <li key={item.card.info.id} className="flex justify-between p-2 border-b border-gray-200">
                        <span className="text-lg">{item.card.info.name}</span>
                        <span className="text-lg font-semibold">Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
