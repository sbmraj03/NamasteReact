import { restaurants } from "../../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


function filterData(searchText, allRestaurantList){
    const filterData= allRestaurantList.filter((value) => 
        value?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filterData;

}


const Body = () => {
    console.log("hello");
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurantList, setFilteredRestaurantList] =useState([]);

  //empty dependency array => one after render
  //dependencey array [searchText] => once after initial render + everytime after render (my searchText changes)
  
  useEffect( () => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=22.556914144090126&lng=88.30290164798497"
    );
    const response= await data.json();
    console.log(response);
    setAllRestaurantList(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantList(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

}

//to stop rendering the component (aka early return)
//  if(!allRestaurantList) return null;
  
    if(filteredRestaurantList?.length ===0) return <h1>No Restaurants Found</h1>
  return allRestaurantList.length===0 ? <Shimmer/> : (
    <>

     {/* search your restaurant */}
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="btn"
            onClick={ () => {
                //need to filter the data
                const data= filterData(searchText,allRestaurantList);
                //update the state-restaurantList avl
                setFilteredRestaurantList(data);
            }}> Search-{searchText} </button>


      <div className="restaurant-list">
            {/* /* write logic for no restaurants found here */}
        {/* earlier the below line was restaurants.map((value) */}
        { filteredRestaurantList.map((value) => { 
          return <RestaurantCard {...value?.info} key={value?.info?.id} />  //do not use index as a key
        })}
      </div>
    </>
  );
}; 

export default Body;
