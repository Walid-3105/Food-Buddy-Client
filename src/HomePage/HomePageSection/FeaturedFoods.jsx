import React, { useEffect, useState } from "react";
import BFoods from "../../Pages/BFoods";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";

const FeaturedFoods = () => {
  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-11-server-seven-sooty.vercel.app/food"
      );
      return res.json();
    },
  });

  const sortFoods = Array.isArray(foods)
    ? foods.sort((a, b) => b.foodQuantity - a.foodQuantity).slice(0, 6)
    : [];

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortFoods &&
          sortFoods?.map((food) => (
            <BFoods food={food} key={food._id}></BFoods>
          ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
