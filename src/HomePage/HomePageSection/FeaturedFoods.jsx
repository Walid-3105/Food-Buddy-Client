import React, { useEffect, useState } from "react";
import BFoods from "../../Pages/BFoods";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturedFoods = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-11-server-beta-bay.vercel.app/food"
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
    <div className="my-16">
      <div>
        <h3 className="text-2xl lg:text-3xl font-bold mb-1">
          Gourmet Delights:
          <TypeAnimation
            sequence={[" A Foodie's Dream", 1000]}
            speed={10}
            repeat={Infinity}
          ></TypeAnimation>
        </h3>
        <NavLink
          to={"/availableFoods"}
          className="btn mb-4 bg-[#023E8A] text-white"
        >
          Show All Food<FaArrowRight></FaArrowRight>
        </NavLink>
      </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortFoods &&
              sortFoods?.map((food) => (
                <BFoods food={food} key={food._id}></BFoods>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedFoods;
