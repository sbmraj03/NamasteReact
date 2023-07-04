import { restaurants } from "../../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


function filterData(searchText, RestaurantList){
    const filterData= RestaurantList.filter((value) => 
        value?.data?.data?.name.includes(searchText)
    );

    return filterData;

}



const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [searchClicked, setSearchClicked] = useState("false");

  const [RestaurantList, setRestaurantList] =useState(restaurants);
  return (
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
                const data= filterData(searchText,RestaurantList);
                //update the state-restaurantList avl
                setRestaurantList(data);
            }}> Search-{searchText} </button>

      
      {/*   toggling the value of true and false */}
      <h2>{searchClicked}</h2>
      <button 
            className="btn"
            onClick={ () => {
                if(searchClicked ==="true") setSearchClicked("false");
                else setSearchClicked("true");
            }}
        >
                setSearchClick
      </button>


        
      <div className="restaurant-list">

        {/* earlier the below line was restaurants.map((value) */}
        { RestaurantList.map((value) => { 
          return <RestaurantCard {...value?.data?.data} key={value?.data?.data?.id} />; //do not use index as a key
        })}
      </div>
    </>
  );
};

export default Body;
