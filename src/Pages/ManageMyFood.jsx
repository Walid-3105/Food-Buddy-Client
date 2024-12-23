import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const ManageMyFood = () => {
  const { user } = useContext(AuthContext);
  const [myAddedFood, setMyAddedFood] = useState([]);
  const [editingFood, setEditingFood] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/food?donatorEmail=${user.email}`, {
        withCredentials: true,
      })
      .then((data) => setMyAddedFood(data.data))
      .catch((error) => console.error(error));
  }, [user.email]);

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
                  .delete(`http://localhost:5000/food/${id}`)
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
              className="btn btn-secondary btn-sm"
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
      .put(`http://localhost:5000/food/${food._id}`, food)
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
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div className="w-11/12 mx-auto min-h-screen">
        <h2 className="text-lg font-bold my-4">
          Manage My Food: {myAddedFood.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Food</th>
                <th>Donator Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myAddedFood &&
                myAddedFood.map((food, index) => (
                  <tr key={food._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={food.foodImage} alt={food.foodName} />
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
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setEditingFood(food);
                          document.getElementById("my_modal_1").showModal();
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(food._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for editing */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Food</h3>

          {editingFood && (
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block font-semibold">Food Name</label>
                <input
                  type="text"
                  value={editingFood.foodName}
                  onChange={(e) =>
                    setEditingFood({ ...editingFood, foodName: e.target.value })
                  }
                  className="input input-bordered w-full"
                />
              </div>
              <div>
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
