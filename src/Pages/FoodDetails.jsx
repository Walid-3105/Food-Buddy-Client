import React from "react";
import NavBar from "../Shared/NavBar";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const { donatorName } = useLoaderData();
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div> food Details:{donatorName}</div>
    </div>
  );
};

export default FoodDetails;
