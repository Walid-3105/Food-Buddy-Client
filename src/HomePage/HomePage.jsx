import React from "react";
import Banner from "./HomePageSection/Banner";
import FeaturedFoods from "./HomePageSection/FeaturedFoods";

const HomePage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
    </div>
  );
};

export default HomePage;
