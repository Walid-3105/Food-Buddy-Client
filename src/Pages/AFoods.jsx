import React from "react";
import { Navigate } from "react-router-dom";

const AFoods = ({ food }) => {
  const { _id } = food;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-lg rounded-lg">
        <figure>
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{food.foodName}</h2>
          <p className="text-gray-600">
            <span className="font-medium">Quantity:</span> {food.foodQuantity}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Pickup Location:</span>{" "}
            {food.pickupLocation}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Donator:</span> {food.donatorName}
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
