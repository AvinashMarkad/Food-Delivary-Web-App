// import resList from "./resList.js";
import Card from "./Card.js";
import { useEffect, useState } from "react";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fechData();
  }, []);

  const fechData = async () => {
    
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();
  
      console.log(json); // Check what the response structure looks like
  
      // Depending on the structure of json, you might need to adjust this:
      const restaurantData = (json?.data?.cards[5]?.card);
      setRestaurantList(restaurantData);
    
  };
  

  return (
    <div className="mainbody">
      <div className="search1">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = RestaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setRestaurantList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {RestaurantList.length > 0 ? (
          RestaurantList.map((restaurants) => (
            <Card key={restaurants.data.id} resData={restaurants} />
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};  

export default Body;