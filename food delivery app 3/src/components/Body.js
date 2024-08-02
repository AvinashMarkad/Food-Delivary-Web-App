import resList from "./resList.js";
import Card from "./Card.js";

const Body = () => {
    return (
      <div className="mainbody">
        <div className="search1">
          <input
            className="search"
            type="text"
            placeholder="Search for food"
          ></input>
        </div>
        <div className="res-container">
          {resList.map((card) => (
            <Card key={card.data.id} resData={card} />
          ))}
        </div>
      </div>
    );
  };

export default Body;