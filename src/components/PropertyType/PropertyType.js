import React from "react";
import "./PropertyType.css";

const PropertyType = () => {
  const images = [
    {
      name: "Hotels",
      img: "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
      alt: "",
      num: 0,
      amount: 102886,
    },
    {
      name: "Apartments",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dc4d4240971115.5606eec417df7.jpg",
      alt: "",
      num: 1,
      amount: 127886,
    },
    {
      name: "Villas",
      img: "https://www.vipholidaybooker.com/storage/app/uploads/public/5da/8f7/f4c/5da8f7f4cb94d724660840.jpg",
      alt: "",
      num: 2,
      amount: 1386,
    },
    {
      name: "Resorts",
      img: "https://www.sherpareport.com/images/stories/destclubs/Exclusive/er-los-cabos-esperanza-750.jpg",
      alt: "",
      num: 3,
      amount: 1567,
    },
    {
      name: "Vacation Houses",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rosewood-mayakoba-residence-1616077172.jpg",
      alt: "",
      num: 4,
      amount: 8256,
    },
    {
      name: "Cabins",
      img: "https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-cabin-camping-1.jpg",
      alt: "",
      num: 5,
      amount: 1763,
    },
    {
      name: "Glampings",
      img: "https://www.tentickle-luxurytents.com/wp-content/uploads/2020/06/76616532_2592366320853490_6985987945891102720_o2.jpg",
      alt: "",
      num: 6,
      amount: 2663,
    },
  ];

  return (
    <div className="properties-container">
      <p className="property-type-text-search">Browse by property type</p>
      <div className="property-type-container">
        {images &&
          images.map(({ name, img, num, amount, alt }) => (
            <div className="property-container" key={num}>
              <img src={img} alt={alt} className="property-img" />
              <p className="property-type-text">
                {amount} {name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PropertyType;
