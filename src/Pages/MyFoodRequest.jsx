import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
import axios from "axios";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/requestFood?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyFoods(data));
  }, [user.email]);

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>

      <div className="min-h-screen m-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Food</th>
                <th>Donator Name</th>
                <th>Request Date</th>
                <th>Expire Date</th>
              </tr>
            </thead>
            {myFoods &&
              myFoods.map((food, index) => (
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

                    <td>{food.expiredDate}</td>
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

export default MyFoodRequest;
