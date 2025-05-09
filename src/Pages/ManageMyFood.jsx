import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ManageMyFood = () => {
  const [myAddedFood, setMyAddedFood] = useState([]);
  const { user } = useContext(AuthContext);
  const [editingFood, setEditingFood] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-beta-bay.vercel.app/my-food?donatorEmail=${user.email}`,
        {
          withCredentials: true,
        }
      )
      .then((data) => setMyAddedFood(data.data))
      .catch((error) => {
        toast.error("Error");
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="font-bold">Are you sure you want to delete this?</p>
          <div className="flex gap-2 mt-3">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                axios
                  .delete(
                    `https://assignment-11-server-beta-bay.vercel.app/food/${id}`
                  )
                  .then((data) => {
                    if (data.data.deletedCount > 0) {
                      setMyAddedFood((prevFoods) =>
                        prevFoods.filter((food) => food._id !== id)
                      );
                      toast.success("Food deleted successfully!");
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                    toast.error("Failed to delete food.");
                  });

                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="btn bg-[#023E8A] text-white btn-sm"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 5000, position: "top-center" }
    );
  };

  const handleUpdateFood = (food) => {
    axios
      .put(
        `https://assignment-11-server-beta-bay.vercel.app/food/${food._id}`,
        food
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setMyAddedFood((prevFoods) =>
            prevFoods.map((f) => (f._id === food._id ? food : f))
          );
          toast.success("Food updated successfully!");
          document.getElementById("my_modal_1").close();
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update food.");
      });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto mt-16 pb-2">
        <NavBar></NavBar>
      </div>
      <div className="w-11/12 mx-auto min-h-screen mt-6">
        <h2 className="font-semibold my-4 text-xl lg:text-2xl">
          Organize My Shared Food
        </h2>
        <div>
          {showSkeleton ? (
            <SkeletonTheme
              height="30px"
              baseColor="#4183da"
              highlightColor="#023E8A"
              duration={3}
            >
              <Skeleton count={7}></Skeleton>
            </SkeletonTheme>
          ) : (
            <div>
              {myAddedFood.length > 0 ? (
                <div className="overflow-x-auto mt-10">
                  <table className="table border rounded-xl">
                    <thead>
                      <tr className="text-gray-500">
                        <th></th>
                        <th>Food</th>
                        <th>Donator Name</th>
                        <th>DeadLine</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myAddedFood.map((food, index) => (
                        <tr key={food._id}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                  <img
                                    src={food.foodImage}
                                    alt={food.foodName}
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{food.foodName}</div>
                                <div className="text-sm opacity-50">
                                  {food.pickupLocation}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{food.donatorName}</td>
                          <td>{food.expiredDate}</td>
                          <td className="flex gap-2">
                            <button
                              className="hover:text-red-500"
                              onClick={() => handleDelete(food._id)}
                            >
                              <RiDeleteBin6Line size={18} />
                            </button>
                            <button
                              className="hover:text-green-500"
                              onClick={() => {
                                setEditingFood(food);
                                document
                                  .getElementById("my_modal_1")
                                  .showModal();
                              }}
                            >
                              <FaRegEdit size={18}></FaRegEdit>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-2xl md:text-3xl lg:text-3xl font-bold text-center items-center">
                  I Don't Add Food
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal for editing */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-black">
          <h3 className="font-bold text-lg">Edit Food</h3>

          {editingFood && (
            <div className="grid grid-cols-1 gap-4">
              {/* Food Image */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Food Image (URL)</span>
                </label>
                <input
                  type="url"
                  name="foodImage"
                  value={editingFood.foodImage}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      foodImage: e.target.value,
                    })
                  }
                  placeholder="Enter image URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="flex gap-5">
                {/* // Food Name */}
                <div className="flex-1">
                  <label className="block font-semibold">Food Name</label>
                  <input
                    type="text"
                    value={editingFood.foodName}
                    onChange={(e) =>
                      setEditingFood({
                        ...editingFood,
                        foodName: e.target.value,
                      })
                    }
                    className="input input-bordered w-full"
                  />
                </div>
                {/* Food Quantity */}
                <div>
                  <label className="block font-semibold">Food Quantity</label>
                  <input
                    type="number"
                    value={editingFood.foodQuantity}
                    onChange={(e) =>
                      setEditingFood({
                        ...editingFood,
                        foodQuantity: e.target.value,
                      })
                    }
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                {/* Pickup Location */}
                <div className="flex-1">
                  <label className="block font-semibold">Pickup Location</label>
                  <input
                    type="text"
                    value={editingFood.pickupLocation}
                    onChange={(e) =>
                      setEditingFood({
                        ...editingFood,
                        pickupLocation: e.target.value,
                      })
                    }
                    className="input input-bordered w-full"
                  />
                </div>
                {/* Expired Date/Time */}
                <div className="flex-1">
                  <label className="block font-semibold">
                    <span>Expired Date</span>
                  </label>
                  <input
                    type="date"
                    value={editingFood.expiredDate}
                    onChange={(e) =>
                      setEditingFood({
                        ...editingFood,
                        expiredDate: e.target.value,
                      })
                    }
                    className="input input-bordered w-full"
                    required
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
                  value={editingFood.additionalNotes}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      additionalNotes: e.target.value,
                    })
                  }
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
            </div>
          )}

          <div className="modal-action">
            <button
              className="btn btn-primary"
              onClick={() => handleUpdateFood(editingFood)}
            >
              Update
            </button>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
      <Footer></Footer>
    </div>
  );
};

export default ManageMyFood;
