import {IMG_CDN_URL} from "../../Constants";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} 
        />
        <div className="info">
            <h4 className="restaurant">{name}</h4>
            <h4 className="cuisines">{cuisines.join(", ")}</h4>
            <h4 className="rating">{avgRating} 🌟</h4>
        </div>
        
  
      </div> 
    );
  }

  export default RestaurantCard;