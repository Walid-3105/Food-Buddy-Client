import React from "react";
import Banner from "./HomePageSection/Banner";
import FeaturedFoods from "./HomePageSection/FeaturedFoods";
import ShareFood from "./ShareFood";
import JoinCommunity from "./JoinCommunity";
import OurMission from "../Pages/HowItWorks";
import HowItWorks from "../Pages/HowItWorks";

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
        <HowItWorks></HowItWorks>
      </div>
      <div>
        <JoinCommunity></JoinCommunity>
      </div>
    </div>
  );
};

export default HomePage;
