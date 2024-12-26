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
        {
          withCredentials: true,
        }
      )
      .then((data) => setMyFoods(data.data));
  }, [user.email]);

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <h3 className="text-2xl font-semibold w-11/12 mx-auto mb-4 mt-5">
        Your Food Requests
      </h3>
      <div className="w-11/12 mx-auto">
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
          <div className="w-11/12 mx-auto min-h-screen mt-10">
            {myFoods.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="table border">
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
            ) : (
              <p className="text-2xl md:text-3xl lg:text-3xl font-bold text-center items-center">
                No Request Food Added
              </p>
            )}
          </div>
        )}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyFoodRequest;
