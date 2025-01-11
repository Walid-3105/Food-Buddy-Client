import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <div className="min-h-[500px] banner_section mt-16">
      <div className="content">
        <h3 className="p-4 text-2xl md:text-3xl lg:text-5xl font-bold">
          FoodBuddy:
          <br />
          Share, Care, & <br />
          Nourish Together
        </h3>
      </div>
    </div>
  );
};

export default Banner;
