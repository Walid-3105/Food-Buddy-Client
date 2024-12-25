import React from "react";
import Banner from "./HomePageSection/Banner";
import FeaturedFoods from "./HomePageSection/FeaturedFoods";
import ShareFood from "./ShareFood";
import JoinCommunity from "./JoinCommunity";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="w-11/12 mx-auto">
        <FeaturedFoods></FeaturedFoods>
      </div>
      <div>
        <ShareFood></ShareFood>
      </div>
      <div>
        <JoinCommunity></JoinCommunity>
      </div>
    </div>
  );
};

export default HomePage;
