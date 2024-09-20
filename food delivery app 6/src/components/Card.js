const Card = (promps) => {
    const { resData } = promps;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      slaString,
    } = resData?.data;
  
    return (
      <div className="res-card">
        <img
          className="Meghana-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="food img"
        />
        <h3>{name}</h3>
        <h3>{cuisines[0]}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{slaString}</h3>
      </div>
    );
  };

export default Card;