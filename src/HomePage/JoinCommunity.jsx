import React from "react";
import { NavLink } from "react-router-dom";

const JoinCommunity = () => {
  return (
    <div className="mb-10">
      <section className="bg-[#023E8A] py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Join Our Community and Make a Difference
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            By joining our food-sharing platform, you are contributing to a more
            sustainable and compassionate world. Share your surplus, request
            food when you need it, and help reduce food waste. Together, we can
            make a lasting impact!
          </p>
          <div className="flex justify-center gap-6">
            <NavLink
              to={"/register"}
              className="bg-white text-green-500 py-3 px-6 rounded-lg text-xl font-semibold hover:bg-green-100 transition-all"
            >
              Sign Up Now
            </NavLink>
            <NavLink
              to={"/addFood"}
              className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-white hover:text-green-500 transition-all"
            >
              Donate Food
            </NavLink>
          </div>
          <div className="mt-12 flex justify-center gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">1,000+</h3>
              <p className="text-lg">Happy Community Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-lg">Meals Shared So Far</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinCommunity;
