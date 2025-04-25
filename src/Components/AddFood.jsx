import React, { useContext, useState } from "react";
import NavBar from "../Shared/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import Footer from "../Shared/Footer";
import moment from "moment";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const foodQuantity = formData.get("foodQuantity");
    const expiredDate = formData.get("expiredDate");
    const currentDate = moment().format("YYYY-MM-DD");
    if (foodQuantity <= 0) {
      toast.error("Food quantity must be greater than 0.");
      return;
    }

    if (expiredDate < currentDate) {
      toast.error("expiredDate must be greater than CurrentData");
      return;
    }

    const foodData = {
      foodName: formData.get("foodName"),
      foodImage: formData.get("foodImage"),
      foodQuantity: foodQuantity,
      pickupLocation: formData.get("pickupLocation"),
      expiredDate: expiredDate,
      additionalNotes: formData.get("additionalNotes"),
      donatorName: formData.get("donatorName"),
      donatorImage: formData.get("donatorImage"),
      donatorEmail: formData.get("donatorEmail"),
      foodStatus: formData.get("foodStatus"),
    };

    e.target.reset();
    axios
      .post("https://assignment-11-server-beta-bay.vercel.app/food", foodData, {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Food Added Successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to Add Data");
      });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto mt-16">
        <NavBar></NavBar>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="w-full text-black max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            Add Food
          </h2>
          <form onSubmit={handleFormSubmit}>
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
            <div className="flex gap-5">
              {/* Food Name */}
              <div className="form-control mb-4 flex-1">
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

              {/* Food Quantity */}
              <div className="form-control mb-4 flex-1">
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
            </div>

            <div className="flex gap-5">
              {/* Pickup Location */}
              <div className="form-control mb-4 flex-1">
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
              <div className="form-control mb-4 flex-1">
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
            </div>
            <div className="flex gap-5">
              {/* Donator Name */}
              <div className="form-control mb-4 flex-1">
                <label className="label">
                  <span className="label-text">Donator Name</span>
                </label>
                <input
                  type="text"
                  name="donatorName"
                  defaultValue={user?.displayName}
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              {/* Donator Email */}
              <div className="form-control mb-4 flex-1">
                <label className="label">
                  <span className="label-text">Donator Email</span>
                </label>
                <input
                  type="email"
                  name="donatorEmail"
                  defaultValue={user?.email}
                  placeholder="Your email"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
            </div>
            <div className="flex gap-5">
              {/* Donator Image */}
              <div className="form-control mb-4 flex-1">
                <label className="label">
                  <span className="label-text">Donator Image (URL)</span>
                </label>
                <input
                  type="url"
                  name="donatorImage"
                  defaultValue={user?.photoURL}
                  placeholder="Enter your image URL"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              {/* Food Status */}
              <div className="form-control mb-4 flex-1">
                <label className="label">
                  <span className="label-text">Food Status</span>
                </label>
                <input
                  type="text"
                  name="foodStatus"
                  defaultValue={"available"}
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
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
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#023E8A] text-white w-full"
              >
                Add Food
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddFood;
