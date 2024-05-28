import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const data = props.listOfRestaurants;
  return (
    <div className="res-container">
      {data.map((restaurant, index) => (
        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
          <div>
            <div className="res-card">
              <img
                className="res-logo"
                alt="res-logo"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  restaurant.info.cloudinaryImageId
                }
              />
              <h3>{restaurant.info.name}</h3>
              <div>{restaurant.info.cuisines.join(", ")}</div>
              <div>{restaurant.info.avgRatingString} stars</div>
              <div>{restaurant.info.sla.deliveryTime} minutes</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCard;
