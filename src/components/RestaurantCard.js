import { CDN_URL } from "../utils/Constants";

const RestaurantCard =(props) =>{
    const {resData} = props
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo
    }=resData?.info || {}  //Destructured

    // const cloudinaryBaseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    // const imageUrl = `${cloudinaryBaseURL}${resData.info.cloudinaryImageId}`; we can keep this imageUrl object in the src of the img tag

    return (
        <div className="res-card">
            <img className="res-img"
                src={CDN_URL+cloudinaryImageId}
                alt="res.img"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    );

}

export default RestaurantCard;