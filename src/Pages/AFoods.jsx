import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AFoods = ({ food }) => {
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
      <div className="card w-full bg-base-100 shadow-lg rounded-lg">
        <figure>
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{foodName}</h2>
          <p className="text-gray-600">
            <span className="font-medium">Quantity:</span> {foodQuantity}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Pickup Location:</span>
            {pickupLocation}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Donator:</span> {donatorName}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Expired Date:</span>
            {expiredDate}
          </p>
          <div className="mt-4">
            <button
              className="btn btn-primary w-full"
              //   onClick={() => Navigate(`/availableFoods/${_id}`)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AFoods;
