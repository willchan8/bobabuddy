import React from 'react';

    class RestaurantItem extends React.Component {
      constructor(props) {
        super(props);
      }
    
      render() {

        const {restaurant, clickVisited} = this.props;

        const visitText = restaurant.visited ? 'Visited' : 'Check In';
        const buttonClass = restaurant.visited ? 'visit-button green' : 'visit-button';
        return (
          <div className="restaurant">
          <img className="picture" src={restaurant.image_url} alt=""/>
          <div className="restaurant-info">
            <div className="restaurant-name">{ restaurant.name }</div>
            <div className="rating">Rating: { restaurant.rating } / 5 ({restaurant.review_count} Reviews)</div>
            <div className="phone">{ restaurant.display_phone }</div>
            <div className="address">{ restaurant.location.address1 }</div>
            <button className={buttonClass} onClick={() => {clickVisited(restaurant)}}>{visitText}</button>
          </div>
        </div>
        );
      }
    }

export default RestaurantItem;