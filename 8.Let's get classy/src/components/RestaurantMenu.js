// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import IMG_CDN_URL from "../../Constants";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//     //how to read a dynamic URL params
//     const params= useParams();
//     const [ restaurant, setRestaurant] = useState({});

//     useEffect( () => {
//         getRestaurantInfo();
//     }, []);

//     async function getRestaurantInfo() {
//         const data= await fetch(
//             "https://www.swiggy.com/mapi/homepage/getCards?lat=22.556914144090126&lng=88.30290164798497"
//         );

//         const response= await data.json();
//         console.log(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
//         setRestaurant(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        
//     }

    
//     return Object.keys(restaurant).length=== 0 ? <Shimmer /> : (
//         <div className="menu">
            
                
//         </div>
        
//     )
// }

// export default RestaurantMenu;