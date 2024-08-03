import resList from "./resList.js";
import Card from "./Card.js";
import { useState } from "react";

const Body = () => {
  // Initialize state with the resList array directly
  const [RestaurantList, setRestaurantList] = useState(resList);

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
