import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../Shared/NavBar";
import AFoods from "./Afoods";

const AvailableFoods = () => {
  const [foods, setFoods] = useState();
  //   const { foodName, foodQuantity, pickupLocation, donatorName } = foods;
  console.log(foods);
  useEffect(() => {
    axios.get("http://localhost:5000/food").then((data) => setFoods(data.data));
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <NavBar></NavBar>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods?.map((food) => (
          <AFoods key={food._id} food={food}></AFoods>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
