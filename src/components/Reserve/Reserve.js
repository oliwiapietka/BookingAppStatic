import React, { useState } from "react";
import "./Reserve.css";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen }) => {
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const rooms = [
    {
      name: "King Room",
      desc: "King size bed, 2 bathrooms, balcony",
      price: 590,
      maxPeople: 2,
      roomNumber: 2,
      id: 1920,
    },
    {
      name: "Basic Room",
      desc: "King size bed, 2 bathrooms, balcony",
      price: 460,
      maxPeople: 2,
      roomNumber: 4,
      id: 2324,
    },
    {
      name: "Premium Room",
      desc: "King size bed, 2 bathrooms, balcony",
      price: 690,
      maxPeople: 2,
      roomNumber: 3,
      id: 2122,
    },
  ];

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="reserve">
      <div className="reserve-container">
        <div className="reserve-close-icon">
          <ion-icon
            name="close-outline"
            onClick={() => setOpen(false)}
          ></ion-icon>
        </div>
        <span className="reserve-main-text">Select your rooms</span>
        {rooms.map(({ name, desc, price, maxPeople, roomNumber, id }) => (
          <div className="room-info-container" key={id}>
            <div className="room-main-infos">
              <div className="room-title">{name}</div>
              <div className="room-desc"></div>
              <div className="room-price">${price}</div>
              <div className="room-max">
                Max people: <b>{maxPeople}</b>
              </div>
            </div>
            <div className="room">
              <label>{roomNumber}</label>
              <input
                className="room-check"
                type="checkbox"
                value={roomNumber}
                onChange={handleSelect}
              ></input>
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="reserve-button">
          {" "}
          RESERVE NOW!{" "}
        </button>
      </div>
    </div>
  );
};

export default Reserve;
