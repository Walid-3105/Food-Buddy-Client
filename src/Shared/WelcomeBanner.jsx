import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="bg-[#023E8A]  text-white h-screen lg:min-h-screen ">
      <div className="p-5 py-10 md:p-48 lg:p-62 flex-row justify-center items-center space-y-11">
        <h3 className="text-4xl">Welcome to FoodBuddy</h3>
        <p className="text-gray-400">
          Our Community Food Sharing Platform helps reduce food waste and fight
          hunger. Users can add, update, manage, and delete food items while
          also requesting available food. The platform is secure, user-friendly,
          and responsive, built with modern technologies like React and MongoDB.
          Join us in creating a sustainable impact by sharing surplus food with
          those in need.
        </p>
        <p>
          Join FoodBuddy and share your thoughts with the world through our
          platform, where your voice makes an impact!
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
