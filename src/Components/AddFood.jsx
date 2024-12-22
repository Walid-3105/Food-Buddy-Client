import React, { useContext, useState } from "react";
import NavBar from "../Shared/NavBar";
import { AuthContext } from "../Provider/AuthProvider";

const AddFood = () => {
  const [foodStatus] = useState("available");
  const { user } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const foodData = {
      foodName: formData.get("foodName"),
      foodImage: formData.get("foodImage"),
      foodQuantity: formData.get("foodQuantity"),
      pickupLocation: formData.get("pickupLocation"),
      expiredDate: formData.get("expiredDate"),
      additionalNotes: formData.get("additionalNotes"),
      donatorName: formData.get("donatorName"),
      donatorImage: formData.get("donatorImage"),
      donatorEmail: formData.get("donatorEmail"),
      foodStatus,
    };

    console.log(foodData);
    e.target.reset();
    fetch("http://localhost:5000/food", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      Add food here
      <div>
        <div className="w-full max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Add Food</h2>
          <form onSubmit={handleFormSubmit}>
            {/* Food Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="Enter food name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Food Image */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Food Image (URL)</span>
              </label>
              <input
                type="url"
                name="foodImage"
                placeholder="Enter image URL"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Food Quantity */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <input
                type="number"
                name="foodQuantity"
                placeholder="Enter quantity"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Pickup Location */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Pickup Location</span>
              </label>
              <input
                type="text"
                name="pickupLocation"
                placeholder="Enter pickup location"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Expired Date/Time */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Expired Date</span>
              </label>
              <input
                type="date"
                name="expiredDate"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Additional Notes */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Additional Notes</span>
              </label>
              <textarea
                name="additionalNotes"
                placeholder="Add any additional notes"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            {/* Donator Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Donator Name</span>
              </label>
              <input
                type="text"
                name="donatorName"
                value={user?.displayName}
                placeholder="Your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Donator Image */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Donator Image (URL)</span>
              </label>
              <input
                type="url"
                name="donatorImage"
                value={user?.photoURL}
                placeholder="Enter your image URL"
                className="input input-bordered w-full"
              />
            </div>

            {/* Donator Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Donator Email</span>
              </label>
              <input
                type="email"
                name="donatorEmail"
                value={user?.email}
                placeholder="Your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Add Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
