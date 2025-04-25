import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
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
        `https://assignment-11-server-beta-bay.vercel.app/requestFood?email=${user.email}`,
        { withCredentials: true }
      )
      .then((data) => setMyFoods(data.data));
  }, [user.email]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="w-11/12 mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Your Food Requests
        </h2>

        {showSkeleton ? (
          <SkeletonTheme
            height="30px"
            baseColor="#cbd5e1"
            highlightColor="#f1f5f9"
            duration={3}
          >
            <Skeleton count={7} />
          </SkeletonTheme>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6">
            {myFoods.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-left">
                  <thead className="bg-gray-200 text-gray-700 uppercase text-sm tracking-wider">
                    <tr>
                      <th className="px-4 py-3">#</th>
                      <th className="px-4 py-3">Food</th>
                      <th className="px-4 py-3">Donator</th>
                      <th className="px-4 py-3">Request Date</th>
                      <th className="px-4 py-3">Expire Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {myFoods.map((food, index) => (
                      <tr key={index} className="hover:bg-gray-100 transition">
                        <td className="px-4 py-4">{index + 1}</td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded overflow-hidden">
                              <img
                                src={food.foodImage}
                                alt={food.foodName}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-semibold">{food.foodName}</p>
                              <p className="text-sm text-gray-500">
                                {food.pickupLocation}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">{food.donatorName}</td>
                        <td className="px-4 py-4">{food.requestDate}</td>
                        <td className="px-4 py-4">{food.expiredDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-xl md:text-2xl text-center text-gray-600 font-medium py-12">
                You haven’t requested any food yet.
              </p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyFoodRequest;
