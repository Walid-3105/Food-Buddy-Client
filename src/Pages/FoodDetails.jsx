import React, { useContext, useState } from "react";
import NavBar from "../Shared/NavBar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    donatorName,
    donatorEmail,
    donatorImage,
    foodImage,
    foodName,
    foodQuantity,
    pickupLocation,
    additionalNotes,
    foodStatus,
    expiredDate,
  } = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <NavBar></NavBar>
      </div>

      <div className="card bg-base-100 shadow-xl w-96">
        <figure>
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{foodName}</h2>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Quantity:</span> {foodQuantity}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Pickup Location:</span>{" "}
            {pickupLocation}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Additional Notes:</span>
            {additionalNotes || "None"}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Food Status:</span>
            <span
              className={`${
                foodStatus === "available"
                  ? "text-green-600 font-bold"
                  : "text-red-600 font-bold"
              }`}
            >
              {foodStatus}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Expires On:</span> {expiredDate}
          </p>
          <div className="flex items-center mt-4">
            <img
              src={donatorImage}
              alt={donatorName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-md font-semibold">{donatorName}</h4>
              <p className="text-sm text-gray-500">{donatorEmail}</p>
            </div>
          </div>
          <div className="card-actions justify-end mt-4">
            {/* <button className="btn btn-primary">Request</button> */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Request
            </button>
          </div>
        </div>
      </div>
      {/* Modal  */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold text-lg mb-4">Request Food</h3>

          {/* Food Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Food Name</label>
              <input
                type="text"
                value={foodName}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold">Food Image</label>
              <img
                src={foodImage}
                alt={foodName}
                className="w-full h-24 object-cover rounded-md"
              />
            </div>

            <div>
              <label className="block font-semibold">Food ID</label>
              <input
                type="text"
                value={_id}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold">Donator Email</label>
              <input
                type="email"
                value={donatorEmail}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold">Donator Name</label>
              <input
                type="text"
                value={donatorName}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold">User Email</label>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold">Request Date</label>
              <input
                type="text"
                value={new Date().toLocaleString()}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold">Pickup Location</label>
              <input
                type="text"
                value={pickupLocation}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold">Expire Date</label>
              <input
                type="text"
                value={expiredDate}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            {/* Editable Field */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block font-semibold">Additional Notes</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Add your notes here..."
                value={additionalNotes}
                // onChange={(e) => setAdditionalNotes(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Actions */}
          <div className="modal-action mt-4">
            <button
              className="btn btn-primary"
              onClick={() => {
                handleRequest();
                window.my_modal_1.close();
              }}
            >
              Request
            </button>
            <button className="btn" onClick={() => window.my_modal_1.close()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FoodDetails;
