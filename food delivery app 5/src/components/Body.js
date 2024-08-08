import resList from "./resList.js";
import Card from "./Card.js";
import {useEffect, useState} from "react";

const Body =  () => {
  const [RestaurantList, setRestaurantList] = useState(resList);

  useEffect(()=>{
    fechData();
},[]);

const fechData = async () => {
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  const json = await data.json();

  console.log(json)
}

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
        {RestaurantList.map((card) => (
          <Card key={card.data.id} resData={card} />
        ))}
      </div>
    </div>
  );
};

export default Body;
