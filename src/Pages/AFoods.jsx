import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./BFoods.css";

const AFoods = ({ food }) => {
  const {
    _id,
    foodImage,
    foodName,
    foodQuantity,
    pickupLocation,
    donatorName,
    expiredDate,
    donatorImage,
  } = food;

  return (
    <div>
      <div className="card w-full shadow-xl shadow-slate-500 rounded-lg">
        <figure>
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-48 object-cover rounded-t-lg "
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{foodName}</h2>
          <p className="">
            <span className="font-medium">Quantity: </span> {foodQuantity} gm
          </p>
          <p className="">
            <span className="font-medium">Pickup Location: </span>
            {pickupLocation}
          </p>
          <p className="">
            <span className="font-medium">Donator: </span> {donatorName}
          </p>
          <p className="">
            <span className="font-medium">Expired Date: </span>
            {expiredDate}
          </p>
          <div className="flex text-center items-center justify-center">
            {/* <div className="flex text-center items-center gap-1">
              <img
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white"
                src={donatorImage || "https://via.placeholder.com/150"}
                alt="User Profile"
              />
              <p className="text-sm">by {donatorName}</p>
            </div> */}
            <div className="mt-2">
              <Link
                to={`/food/${_id}`}
                className="btn btn-sm bg-[#023E8A] text-white w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AFoods;
