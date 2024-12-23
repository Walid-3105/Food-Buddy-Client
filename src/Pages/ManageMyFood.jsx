import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const ManageMyFood = () => {
  const { user } = useContext(AuthContext);
  const [myAddedFood, setMyAddedFood] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/food?donatorEmail=${user.email}`)
      .then((data) => setMyAddedFood(data.data));
  }, [user.email]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/food/${id}`).then((data) => {
      if (data.data.deletedCount > 0) {
        axios
          .get(`http://localhost:5000/food?donatorEmail=${user.email}`)
          .then((data) => setMyAddedFood(data.data));
      }
      toast.success("Successfully Deleted");
    });
  };
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div>
        ManageMyFood:{myAddedFood.length}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Food</th>
                <th>Donator Name</th>
                <th>Request Date</th>
                <th>Edit</th>
              </tr>
            </thead>
            {myAddedFood &&
              myAddedFood.map((food, index) => (
                <tbody key={index}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={food.foodImage}
                              alt="Avatar Tailwind CSS Component"
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
                    <td>{food.requestDate}</td>
                    <td onClick={() => handleDelete(food._id)} className="btn">
                      Delete
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ManageMyFood;
