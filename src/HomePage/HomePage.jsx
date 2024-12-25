import React from "react";
import Banner from "./HomePageSection/Banner";
import FeaturedFoods from "./HomePageSection/FeaturedFoods";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="w-11/12 mx-auto">
        <FeaturedFoods></FeaturedFoods>
      </div>
    </div>
  );
};

export default HomePage;
