import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./ShareFood.css";
const ShareFood = () => {
  return (
    <div>
      <section className=" py-20 share shadow-xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6 cart">
            Why Food Sharing Matters
          </h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Food sharing is a powerful way to reduce food waste, help those in
            need, and create a more sustainable future. By donating surplus food
            or requesting what you need, you're making a significant difference
            in your community.
          </p>
          <div className="flex flex-wrap justify-center gap-8 ">
            <div className=" p-6 rounded-lg  w-full sm:w-1/3 shadow-2xl shadow-slate-500">
              <h3 className="text-xl font-medium mb-4 cart">
                1. Reduce Food Waste
              </h3>
              <p className="">
                Every year, billions of pounds of food go to waste while
                millions of people face hunger. Food sharing helps reduce this
                imbalance.
              </p>
            </div>
            <div className=" p-6 rounded-lg w-full sm:w-1/3 shadow-2xl shadow-slate-500">
              <h3 className="text-xl font-medium mb-4 cart">
                2. Support Your Community
              </h3>
              <p className="">
                Donating food directly to people in need strengthens local
                communities and ensures no one goes hungry.
              </p>
            </div>
            <div className=" p-6 rounded-lg w-full sm:w-1/3 shadow-2xl shadow-slate-500">
              <h3 className="text-xl font-medium mb-4 cart">
                3. Promote Sustainability
              </h3>
              <p className="">
                By sharing food, you help minimize environmental impact and
                promote sustainable consumption patterns.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <NavLink
            to={"/addFood"}
            className="btn px-10 bg-[#023d8ae5] text-white"
          >
            Donate<FaArrowRight></FaArrowRight>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ShareFood;
