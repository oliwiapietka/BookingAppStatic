import React from "react";
import { Link } from "react-router-dom";
import "./SearchItem.css";

const SearchItemData = {
  photo:
    "https://www.manooi.com/mn17/wp-content/uploads/vague_kensington_1.jpg",
  name: "Warsaw Apartment Premium",
  address: "Grzybowska 43A, 00-855",
  distance: 1000,
  type: "Apartment",
  description:
    "1 living room · 2 bedroom · 1 bathroom · 1 kitchen · 3 beds (2 full, 1 sofa bed) · 185²",
  rating: 9.3,
  cheapestPrice: 450,
  id: 123,
};

const SearchItem = () => {
  return (
    <div className="search-item">
      <img src={SearchItemData.photo} alt="" className="search-item-img" />
      <div>
        <div className="search-item-description">
          <h1 className="search-item-title">{SearchItemData.name}</h1>
          <p className="search-item-location">
            {SearchItemData.address} · {SearchItemData.distance}m from center
          </p>
        </div>
        <div className="search-item-details-container">
          <p className="search-item-type">{SearchItemData.type}</p>
          <p className="search-item-details">{SearchItemData.description}</p>
          <div>
            <span>Excellent </span>
            <span>
              {SearchItemData.rating} <ion-icon name="star"></ion-icon>
            </span>
          </div>
          <span className="search-item-price">
            ${SearchItemData.cheapestPrice}
          </span>
          <Link to={`/hotels/${SearchItemData.id}`}>
            <div className="search-item-availability-btn">
              <p>See availability</p>
              <ion-icon name="chevron-forward-sharp"></ion-icon>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
