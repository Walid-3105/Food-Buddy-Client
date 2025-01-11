import React from "react";
import { Link } from "react-router-dom";
import "./BFoods.css";

const BFoods = ({ food }) => {
  const {
    _id,
    foodImage,
    foodName,
    foodQuantity,
    pickupLocation,
    donatorName,
    expiredDate,
  } = food;

  return (
    <div>
      <div className="card w-full shadow-xl shadow-slate-500 rounded-lg">
        <figure>
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-48 object-cover rounded-t-lg featureFood"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{foodName}</h2>
          <p className="">
            <span className="font-medium">Quantity:</span> {foodQuantity} gm
          </p>
          <p className="">
            <span className="font-medium">Pickup Location: </span>
            {pickupLocation}
          </p>
          <p className="">
            <span className="font-medium">Donator:</span> {donatorName}
          </p>
          <p className="">
            <span className="font-medium">Expired Date: </span>
            {expiredDate}
          </p>
          {/* <div className="mt-4 ">
            <Link to={`/food/${_id}`} className="btn bg-[#4CAF50] w-full">
              View Details
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BFoods;
