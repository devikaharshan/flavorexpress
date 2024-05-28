// import { restInfoData } from "../utils/mockData";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

  if(!restInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card.card.info;
  return (
    restInfo && <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
