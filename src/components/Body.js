import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import { swiggyMock } from "../utils/mockData";
import Shimmer from "../components/Shimmer";
import ClassPage from '../components/ClassPage';
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
    // const data = swiggyMock;
    // const data = fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    
    // setListOfRestaurants(swiggyMock?.data?.cards[0]?.card?.restaurants);
    // setFilteredRestaurant(swiggyMock?.data?.cards[0]?.card?.restaurants);
    setSearchText('');
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('a',data);
      setListOfRestaurants(data?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurant(data?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  if(!status) return <div>No network</div>
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}/>
          <button className="searchBtn" onClick={() => {
            console.log(searchText);
            const filteredRestVal = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestVal);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard listOfRestaurants={filteredRestaurant} />
      </div>
      <ClassPage />
    </div>
  );
};

export default Body;
